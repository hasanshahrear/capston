export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
  createBy: number;
  createdByName: string | null;
  createAt: string;
  updateBy: number | null;
  updatedByName: string | null;
  updateAt: string | null;
  typeId: number;
  typeName: string;
  statusId: number;
  status: string;
};

export interface AuthUser {
  code: string;
  success: boolean;
  message: string;
  data: Data;
}

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
  provider: string;
  providerToken: string;
};
