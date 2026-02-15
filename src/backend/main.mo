import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Int "mo:core/Int";
import Nat "mo:core/Nat";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import OutCall "http-outcalls/outcall";
import Migration "migration";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public type WhatsAppNotificationStatus = {
    attemptTime : ?Time.Time;
    attemptResult : ?{
      #success;
      #failure : Text;
    };
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
    whatsAppNotificationStatus : WhatsAppNotificationStatus;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Int.compare(s2.timestamp, s1.timestamp);
    };
  };

  let contactSubmissionsMap = Map.empty<Text, ContactSubmission>();
  var nextSubmissionId : Nat = 0;

  func generateId() : Text {
    let id = nextSubmissionId.toText();
    nextSubmissionId += 1;
    id;
  };

  public query ({ caller }) func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  func sendWhatsAppMessage(name : Text, message : Text) : async { #success; #failure : Text } {
    let url = "https://your-whatsapp-api-endpoint.com/send-message?name=" # name # "&message=" # message;

    try {
      let _res = await OutCall.httpGetRequest(url, [], transform);
      #success;
    } catch (error) {
      #failure("WhatsApp message failed with error: " # error.message());
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    // No authorization check - public contact form accessible to everyone including guests
    let id = generateId();
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp;
      whatsAppNotificationStatus = {
        attemptTime = null;
        attemptResult = null;
      };
    };
    contactSubmissionsMap.add(id, submission);

    switch (await sendWhatsAppMessage(name, message)) {
      case (#success) {
        let updatedSubmission = {
          name = submission.name;
          email = submission.email;
          phone = submission.phone;
          message = submission.message;
          timestamp = submission.timestamp;
          whatsAppNotificationStatus = {
            attemptTime = ?timestamp;
            attemptResult = ?#success;
          };
        };
        contactSubmissionsMap.add(id, updatedSubmission);
      };
      case (#failure(error)) {
        let updatedSubmission = {
          name = submission.name;
          email = submission.email;
          phone = submission.phone;
          message = submission.message;
          timestamp = submission.timestamp;
          whatsAppNotificationStatus = {
            attemptTime = ?timestamp;
            attemptResult = ?#failure(error);
          };
        };
        contactSubmissionsMap.add(id, updatedSubmission);
      };
    };
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all contact submissions");
    };
    contactSubmissionsMap.values().toArray().sort();
  };
};
