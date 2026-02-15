import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";

module {
  public type WhatsAppNotificationStatus = {
    attemptTime : ?Time.Time;
    attemptResult : ?{ #success; #failure : Text };
  };

  public type OldContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type OldActor = {
    contactSubmissionsMap : Map.Map<Text, OldContactSubmission>;
  };

  public type NewContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
    whatsAppNotificationStatus : WhatsAppNotificationStatus;
  };

  public type NewActor = {
    contactSubmissionsMap : Map.Map<Text, NewContactSubmission>;
  };

  public func run(old : OldActor) : NewActor {
    let newContactSubmissionsMap = old.contactSubmissionsMap.map<Text, OldContactSubmission, NewContactSubmission>(
      func(_id, oldSubmission) {
        {
          name = oldSubmission.name;
          email = oldSubmission.email;
          phone = oldSubmission.phone;
          message = oldSubmission.message;
          timestamp = oldSubmission.timestamp;
          whatsAppNotificationStatus = {
            attemptTime = null;
            attemptResult = null;
          };
        };
      }
    );
    {
      contactSubmissionsMap = newContactSubmissionsMap;
    };
  };
};
