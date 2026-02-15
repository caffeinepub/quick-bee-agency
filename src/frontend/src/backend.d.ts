import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export type Time = bigint;
export interface WhatsAppNotificationStatus {
    attemptResult?: {
        __kind__: "failure";
        failure: string;
    } | {
        __kind__: "success";
        success: null;
    };
    attemptTime?: Time;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    whatsAppNotificationStatus: WhatsAppNotificationStatus;
}
export interface UserProfile {
    name: string;
}
export interface http_header {
    value: string;
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
}
