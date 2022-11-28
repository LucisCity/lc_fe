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
};

export type AuthGql = {
  __typename?: 'AuthGql';
  token: Scalars['String'];
  user: UserGql;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Login */
  login: AuthGql;
  /** Facebook login */
  loginFacebook: AuthGql;
  /** Google login */
  loginGoogle: AuthGql;
  /** Register */
  register: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginFacebookArgs = {
  accessToken: Scalars['String'];
};


export type MutationLoginGoogleArgs = {
  token: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  ref_code?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Auth resolver */
  temp: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invite_by?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  ref_code: Scalars['String'];
  role: UserRole;
  status: UserStatus;
  updated_at: Scalars['DateTime'];
};

export type UserGql = {
  __typename?: 'UserGql';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ref_code: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
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
  Banned = 'BANNED'
}
