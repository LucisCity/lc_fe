export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
};

export type AccountInfo = {
  __typename?: 'AccountInfo';
  date_of_birth?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  user_id: Scalars['ID'];
  user_name?: Maybe<Scalars['String']>;
};

export type AccountInfoUpdateInput = {
  date_of_birth?: InputMaybe<Scalars['DateTime']>;
  display_name?: InputMaybe<Scalars['String']>;
  family_name?: InputMaybe<Scalars['String']>;
  given_name?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
};

export type AuthGql = {
  __typename?: 'AuthGql';
  token: Scalars['String'];
  user: UserGql;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** change password */
  changePassword?: Maybe<Scalars['Boolean']>;
  /** claim referral */
  claimReferral?: Maybe<Wallet>;
  /** Forgot password */
  forgotPassword: Scalars['Boolean'];
  /** Login */
  login: AuthGql;
  /** Facebook login */
  loginFacebook: AuthGql;
  /** Google login */
  loginGoogle: AuthGql;
  /** Register */
  register: Scalars['String'];
  /** Forgot password */
  resetPassword: Scalars['Boolean'];
  /** Send tx transaction */
  sendTransaction: Scalars['Boolean'];
  /** set pool wallet */
  setPoolWallet: Scalars['Boolean'];
  /** update account info */
  updateAccountInfo?: Maybe<Scalars['Boolean']>;
  /** Verify email */
  verifyEmail: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPass: Scalars['String'];
  oldPass: Scalars['String'];
};


export type MutationClaimReferralArgs = {
  inviteeId: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginFacebookArgs = {
  accessToken: Scalars['String'];
  refCode?: InputMaybe<Scalars['String']>;
};


export type MutationLoginGoogleArgs = {
  refCode?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  ref_code?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendTransactionArgs = {
  abi?: InputMaybe<Scalars['String']>;
  txHash: Scalars['String'];
};


export type MutationSetPoolWalletArgs = {
  address: Scalars['String'];
  privateKey: Scalars['String'];
};


export type MutationUpdateAccountInfoArgs = {
  input: AccountInfoUpdateInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export type ProfileGql = {
  __typename?: 'ProfileGql';
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  user_id: Scalars['ID'];
  user_name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** get account info */
  getAccountInfo?: Maybe<AccountInfo>;
  /** get balance */
  getBalance: Wallet;
  /** Get list referral user */
  getListReferralUser: Array<ReferralDataResponse>;
  /** Auth resolver */
  temp: Scalars['String'];
};

export type ReferralDataResponse = {
  __typename?: 'ReferralDataResponse';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invited_by?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  ref_code: Scalars['String'];
  referral_log?: Maybe<ReferralLog>;
  reward?: Maybe<Scalars['String']>;
  role: UserRole;
  status: UserStatus;
  updated_at: Scalars['DateTime'];
  wallet?: Maybe<Wallet>;
};

export type ReferralLog = {
  __typename?: 'ReferralLog';
  created_at: Scalars['DateTime'];
  invited_by: Scalars['String'];
  isClaim: Scalars['Boolean'];
  type?: Maybe<ReferralType>;
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['ID'];
};

export enum ReferralType {
  BuyGalaxyCard = 'BUY_GALAXY_CARD',
  Register = 'REGISTER'
}

export type TransactionLog = {
  __typename?: 'TransactionLog';
  amount: Scalars['Decimal'];
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  transaction_type: TransactionType;
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
  wallet: Wallet;
};

export type TransactionType = {
  __typename?: 'TransactionType';
  _count: TransactionTypeCount;
  code: Scalars['String'];
  description: Scalars['String'];
  transaction_log?: Maybe<Array<TransactionLog>>;
};

export type TransactionTypeCount = {
  __typename?: 'TransactionTypeCount';
  transaction_log: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invited_by?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  ref_code: Scalars['String'];
  referral_log?: Maybe<ReferralLog>;
  role: UserRole;
  status: UserStatus;
  updated_at: Scalars['DateTime'];
  wallet?: Maybe<Wallet>;
};

export type UserGql = {
  __typename?: 'UserGql';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  profile: ProfileGql;
  ref_code: Scalars['String'];
  referral_log?: Maybe<ReferralLog>;
  wallet?: Maybe<Wallet>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  date_of_birth?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  family_name?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['ID'];
  user_name?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum UserStatus {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Pending = 'PENDING'
}

export type Wallet = {
  __typename?: 'Wallet';
  _count: WalletCount;
  balance: Scalars['Decimal'];
  created_at: Scalars['DateTime'];
  transaction_log?: Maybe<Array<TransactionLog>>;
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['ID'];
};

export type WalletCount = {
  __typename?: 'WalletCount';
  transaction_log: Scalars['Int'];
};
