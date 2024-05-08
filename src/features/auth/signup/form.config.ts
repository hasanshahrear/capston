import {
  passwordMessage,
  passwordRegex,
} from "@/features/helper/common-string";
import * as yup from "yup";

export const SignUpSchema = yup.object({
  email_or_phone: yup.string().label("Username").min(1).max(50).required(),
  firstName: yup.string().label("Full Name").min(1).max(50).required(),
  gender: yup.string().label("Gender").nullable(),
  password: yup
    .string()
    .label("Password")
    .min(8)
    .required()
    .matches(passwordRegex, passwordMessage),
  dateOfBirth: yup.date().required("Date of Birth"),
});

export type TSingUp = yup.InferType<typeof SignUpSchema>;

export const InitialValue: TSingUp = {
  email_or_phone: "",
  password: "",
  firstName: "",
  gender: "",
  dateOfBirth: new Date(),
};

export type SignUpResponse = {
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
