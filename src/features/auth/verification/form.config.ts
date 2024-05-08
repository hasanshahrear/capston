import * as yup from "yup";

export const VerificationSchema = yup.object({
  user_id: yup.number(),
  verification_code: yup.string(),
});

export type VerificationRequest = yup.InferType<typeof VerificationSchema>;

export const InitialValue: VerificationRequest = {
  user_id: 0,
  verification_code: "",
};

export type VerificationResponse = {
  code: string;
  success: boolean;
  message: string;
  data: Data;
};

export type Data = {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  user: User;
};

export type User = {
  _id: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  profileImage: string;
  deviceToken: string;
};
