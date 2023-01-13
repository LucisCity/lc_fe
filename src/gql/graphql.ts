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
  JSON: any;
};

export type AccountInfo = {
  __typename?: "AccountInfo";
  date_of_birth?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  family_name?: Maybe<Scalars["String"]>;
  given_name?: Maybe<Scalars["String"]>;
  user_name?: Maybe<Scalars["String"]>;
};

export type AccountInfoUpdateInput = {
  date_of_birth?: InputMaybe<Scalars["DateTime"]>;
  family_name?: InputMaybe<Scalars["String"]>;
  given_name?: InputMaybe<Scalars["String"]>;
  user_name?: InputMaybe<Scalars["String"]>;
};

export type AuthGql = {
  __typename?: "AuthGql";
  token: Scalars["String"];
  user: UserGql;
};

export type BlockchainTransaction = {
  __typename?: "BlockchainTransaction";
  abi?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  message_error?: Maybe<Scalars["String"]>;
  status: TransactionStatus;
  transaction_log?: Maybe<TransactionLog>;
  transaction_log_id?: Maybe<Scalars["String"]>;
  tx_hash: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type Contract = {
  __typename?: "Contract";
  abi?: Maybe<Scalars["String"]>;
  address: Scalars["String"];
  admin?: Maybe<Scalars["String"]>;
  admin_prv_key?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  project?: Maybe<Project>;
  type?: Maybe<ContractType>;
  updated_at: Scalars["DateTime"];
};

export enum ContractType {
  Nft = "NFT",
  Token = "TOKEN",
}

export type DashboardData = {
  __typename?: "DashboardData";
  profitRate?: Maybe<Scalars["String"]>;
  totalAssetsBalance?: Maybe<Scalars["String"]>;
  totalInvestedBalance?: Maybe<Scalars["String"]>;
};

/** all back-end error code */
export enum ErrorCode {
  AccountExisted = "ACCOUNT_EXISTED",
  BadRequest = "BAD_REQUEST",
  BalanceNotEnough = "BALANCE_NOT_ENOUGH",
  BalancePoolNotEnough = "BALANCE_POOL_NOT_ENOUGH",
  DuplicateWalletAddress = "DUPLICATE_WALLET_ADDRESS",
  EmailInvalid = "EMAIL_INVALID",
  EmailRegistered = "EMAIL_REGISTERED",
  Error_500 = "ERROR_500",
  FbIdNotFound = "FB_ID_NOT_FOUND",
  InvalidNewPass = "INVALID_NEW_PASS",
  InvalidTimeVoteSell = "INVALID_TIME_VOTE_SELL",
  InviteeNotExist = "INVITEE_NOT_EXIST",
  KycPendingOrSucceed = "KYC_PENDING_OR_SUCCEED",
  LoginFbFailed = "LOGIN_FB_FAILED",
  NewPassSameOldPass = "NEW_PASS_SAME_OLD_PASS",
  NotEnoughNft = "NOT_ENOUGH_NFT",
  NotVipUser = "NOT_VIP_USER",
  ProfitIsZero = "PROFIT_IS_ZERO",
  ProjectNotFound = "PROJECT_NOT_FOUND",
  ReferralClaimed = "REFERRAL_CLAIMED",
  SellVoted = "SELL_VOTED",
  SignatureExpired = "SIGNATURE_EXPIRED",
  SignatureWrong = "SIGNATURE_WRONG",
  TestServerError = "TEST_SERVER_ERROR",
  TokenInvalid = "TOKEN_INVALID",
  UsernameDuplicated = "USERNAME_DUPLICATED",
  UserConnectedWallet = "USER_CONNECTED_WALLET",
  UserDontHavePassword = "USER_DONT_HAVE_PASSWORD",
  UserNotFound = "USER_NOT_FOUND",
  WalletNotFound = "WALLET_NOT_FOUND",
  WrongOldPass = "WRONG_OLD_PASS",
  WrongPassword = "WRONG_PASSWORD",
}

export type InvestedProjectGql = {
  __typename?: "InvestedProjectGql";
  address: Scalars["String"];
  contract?: Maybe<Contract>;
  contract_address?: Maybe<Scalars["String"]>;
  end_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  ended: Scalars["Boolean"];
  id: Scalars["ID"];
  location: Scalars["String"];
  nft_bought: ProjectNftOwnerGql;
  nft_price: Scalars["Decimal"];
  open_sale_at: Scalars["DateTime"];
  policy_link: Scalars["String"];
  price: Scalars["Int"];
  profile: ProjectProfileGql;
  profit_balance: ProjectProfitBalanceGql;
  profit_period: Scalars["Int"];
  profit_period_index: Scalars["Int"];
  start_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  take_profit_at: Scalars["DateTime"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
  total_nft: Scalars["Int"];
  total_nft_sold: Scalars["Int"];
  type: ProjectType;
};

export type InvestorGql = {
  __typename?: "InvestorGql";
  id: Scalars["ID"];
  profile: InvestorProfileGql;
  transaction_log?: Maybe<Array<TransactionLog>>;
  vipCard?: Maybe<VipCard>;
};

export type InvestorProfileGql = {
  __typename?: "InvestorProfileGql";
  avatar?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  display_name?: Maybe<Scalars["String"]>;
  family_name?: Maybe<Scalars["String"]>;
  given_name?: Maybe<Scalars["String"]>;
  user_id: Scalars["ID"];
};

export enum KycStatus {
  Failed = "FAILED",
  Pending = "PENDING",
  Success = "SUCCESS",
}

export type Mutation = {
  __typename?: "Mutation";
  /** change password */
  changePassword?: Maybe<Scalars["Boolean"]>;
  /** claim profit vip user */
  claimProfitForVipUser?: Maybe<Scalars["Boolean"]>;
  /** Claim project profit */
  claimProjectProfit?: Maybe<Scalars["Boolean"]>;
  /** claim referral */
  claimReferral?: Maybe<Wallet>;
  /** claim profit vip user */
  contactUs?: Maybe<Scalars["Boolean"]>;
  /** Forgot password */
  forgotPassword: Scalars["Boolean"];
  /** Login */
  login: AuthGql;
  /** Facebook login */
  loginFacebook: AuthGql;
  /** Google login */
  loginGoogle: AuthGql;
  /** mark all notis as read */
  markAllNotisSeen?: Maybe<Scalars["Boolean"]>;
  /** Register */
  register: Scalars["String"];
  /** Forgot password */
  resetPassword: Scalars["Boolean"];
  seenNotification?: Maybe<Scalars["Boolean"]>;
  /** Send tx transaction */
  sendTransaction: Scalars["Boolean"];
  /** Toggle follow project */
  toggleFollowProject?: Maybe<Scalars["Boolean"]>;
  /** update account info */
  updateAccountInfo?: Maybe<ProfileGql>;
  /** upadate wallet address */
  updateWalletAddress?: Maybe<Scalars["String"]>;
  /** Verify email */
  verifyEmail: Scalars["String"];
  /** Vote project */
  voteProject?: Maybe<Scalars["Boolean"]>;
  /** Vote sell project */
  voteSellProject?: Maybe<Scalars["Boolean"]>;
  /** withdraw balance */
  withdrawBalance: TransactionLog;
};

export type MutationChangePasswordArgs = {
  newPass: Scalars["String"];
  oldPass?: InputMaybe<Scalars["String"]>;
};

export type MutationClaimProjectProfitArgs = {
  projectId: Scalars["String"];
};

export type MutationClaimReferralArgs = {
  inviteeId: Scalars["String"];
};

export type MutationContactUsArgs = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone: Scalars["String"];
  question?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationLoginFacebookArgs = {
  accessToken: Scalars["String"];
  refCode?: InputMaybe<Scalars["String"]>;
};

export type MutationLoginGoogleArgs = {
  refCode?: InputMaybe<Scalars["String"]>;
  token: Scalars["String"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  ref_code?: InputMaybe<Scalars["String"]>;
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  token: Scalars["String"];
};

export type MutationSeenNotificationArgs = {
  id: Scalars["Int"];
};

export type MutationSendTransactionArgs = {
  abi?: InputMaybe<Scalars["String"]>;
  txHash: Scalars["String"];
};

export type MutationToggleFollowProjectArgs = {
  projectId: Scalars["String"];
};

export type MutationUpdateAccountInfoArgs = {
  input: AccountInfoUpdateInput;
};

export type MutationUpdateWalletAddressArgs = {
  walletAddress: Scalars["String"];
};

export type MutationVerifyEmailArgs = {
  token: Scalars["String"];
};

export type MutationVoteProjectArgs = {
  input: RateProjectInput;
};

export type MutationVoteSellProjectArgs = {
  isSell: Scalars["Boolean"];
  projectId: Scalars["String"];
};

export type MutationWithdrawBalanceArgs = {
  address: Scalars["String"];
  amount: Scalars["String"];
  signatureOTP: Scalars["String"];
};

export type NotificationGql = {
  __typename?: "NotificationGql";
  content?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  is_seen: Scalars["Boolean"];
  link?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  user_id: Scalars["String"];
};

export type ProfileGql = {
  __typename?: "ProfileGql";
  avatar?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  date_of_birth?: Maybe<Scalars["DateTime"]>;
  display_name?: Maybe<Scalars["String"]>;
  family_name?: Maybe<Scalars["String"]>;
  given_name?: Maybe<Scalars["String"]>;
  user_id: Scalars["ID"];
  user_name?: Maybe<Scalars["String"]>;
};

export type Project = {
  __typename?: "Project";
  address: Scalars["String"];
  contract?: Maybe<Contract>;
  contract_address?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  enable: Scalars["Boolean"];
  end_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  ended: Scalars["Boolean"];
  id: Scalars["ID"];
  location: Scalars["String"];
  nft_price: Scalars["Decimal"];
  open_sale_at: Scalars["DateTime"];
  policy_link: Scalars["String"];
  price: Scalars["Int"];
  profile?: Maybe<ProjectProfile>;
  profit_period: Scalars["Int"];
  profit_period_index: Scalars["Int"];
  start_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  take_profit_at: Scalars["DateTime"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
  total_nft: Scalars["Int"];
  total_nft_sold: Scalars["Int"];
  type: ProjectType;
  updated_at: Scalars["DateTime"];
};

export type ProjectEventGql = {
  __typename?: "ProjectEventGql";
  /** Event description */
  description: Scalars["String"];
  /** Event start time */
  start_at: Scalars["String"];
  /** Event title */
  title: Scalars["String"];
};

export type ProjectFilter = {
  type?: InputMaybe<ProjectType>;
};

export type ProjectGql = {
  __typename?: "ProjectGql";
  address: Scalars["String"];
  contract?: Maybe<Contract>;
  contract_address?: Maybe<Scalars["String"]>;
  end_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  ended: Scalars["Boolean"];
  id: Scalars["ID"];
  location: Scalars["String"];
  nft_price: Scalars["Decimal"];
  open_sale_at: Scalars["DateTime"];
  policy_link: Scalars["String"];
  price: Scalars["Int"];
  profile: ProjectProfileGql;
  profit_period: Scalars["Int"];
  profit_period_index: Scalars["Int"];
  start_time_vote_sell?: Maybe<Scalars["DateTime"]>;
  take_profit_at: Scalars["DateTime"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
  total_nft: Scalars["Int"];
  total_nft_sold: Scalars["Int"];
  type: ProjectType;
};

export type ProjectMediaGql = {
  __typename?: "ProjectMediaGql";
  /** Height of image */
  height: Scalars["Int"];
  /** Thumbnail url */
  thumbnail?: Maybe<Scalars["String"]>;
  /** Media url */
  url: Scalars["String"];
  /** Width of image */
  width: Scalars["Int"];
};

export type ProjectNftOwner = {
  __typename?: "ProjectNftOwner";
  created_at: Scalars["DateTime"];
  currency_amount: Scalars["Decimal"];
  is_burned: Scalars["Boolean"];
  is_sell_voted: Scalars["Boolean"];
  project_ended: Scalars["Boolean"];
  project_id: Scalars["String"];
  total_nft: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["String"];
};

export type ProjectNftOwnerGql = {
  __typename?: "ProjectNftOwnerGql";
  currency_amount: Scalars["Decimal"];
  is_burned: Scalars["Boolean"];
  project_id: Scalars["String"];
  total_nft: Scalars["Int"];
  user: InvestorGql;
  user_id: Scalars["String"];
};

export type ProjectOfferGql = {
  __typename?: "ProjectOfferGql";
  /** Icon */
  icon: Scalars["String"];
  /** Title */
  title: Scalars["String"];
};

export type ProjectProfile = {
  __typename?: "ProjectProfile";
  created_at: Scalars["DateTime"];
  events: Scalars["JSON"];
  follows: Scalars["Int"];
  highlight?: Maybe<Scalars["String"]>;
  medias: Scalars["JSON"];
  offers?: Maybe<Scalars["String"]>;
  project: Project;
  project_id: Scalars["String"];
  reason_invest?: Maybe<Scalars["String"]>;
  total_vote: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  vote: Scalars["Decimal"];
};

export type ProjectProfileGql = {
  __typename?: "ProjectProfileGql";
  events?: Maybe<Array<ProjectEventGql>>;
  follows: Scalars["Int"];
  highlight?: Maybe<Scalars["String"]>;
  medias?: Maybe<Array<ProjectMediaGql>>;
  offers?: Maybe<Array<ProjectOfferGql>>;
  project_id: Scalars["String"];
  reason_invest?: Maybe<Scalars["String"]>;
  total_vote: Scalars["Int"];
  vote: Scalars["Decimal"];
};

export type ProjectProfitBalance = {
  __typename?: "ProjectProfitBalance";
  balance: Scalars["Decimal"];
  balance_claimed: Scalars["Decimal"];
  created_at: Scalars["DateTime"];
  from: Scalars["DateTime"];
  project_id: Scalars["String"];
  to: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  user_id: Scalars["String"];
};

export type ProjectProfitBalanceGql = {
  __typename?: "ProjectProfitBalanceGql";
  balance: Scalars["Decimal"];
  balance_claimed: Scalars["Decimal"];
  from: Scalars["DateTime"];
  to: Scalars["DateTime"];
  user_id: Scalars["String"];
};

export enum ProjectType {
  Homestay = "HOMESTAY",
  Hotel = "HOTEL",
  House = "HOUSE",
  TouristVillage = "TOURIST_VILLAGE",
  Villa = "VILLA",
}

export type Query = {
  __typename?: "Query";
  /** Test compute profit */
  computeProfit?: Maybe<Scalars["Boolean"]>;
  /** get unseen notis count */
  countUnseenNotifications?: Maybe<Scalars["Int"]>;
  /** get list of projects user is following */
  followingProjects: Array<ProjectGql>;
  /** get account info */
  getAccountInfo?: Maybe<AccountInfo>;
  getAppErrorCode?: Maybe<Scalars["Boolean"]>;
  /** get balance */
  getBalance?: Maybe<Wallet>;
  /** claim profit vip user */
  getDashboard?: Maybe<DashboardData>;
  /** Get nft bought of user */
  getInvestor?: Maybe<Array<ProjectNftOwnerGql>>;
  /** get kyc verification images */
  getKycImages?: Maybe<UserKycVerification>;
  /** Get list referral user */
  getListReferralUser: Array<ReferralDataResponse>;
  /** Get nft bought of user */
  getNftBought?: Maybe<ProjectNftOwner>;
  /** get all notis */
  getNotifications?: Maybe<Array<NotificationGql>>;
  /** get OTP */
  getOneTimePassword: Scalars["String"];
  /** Get profit balance */
  getProfitBalance?: Maybe<ProjectProfitBalance>;
  /** get profit vip user */
  getProfitForVipMember?: Maybe<Scalars["String"]>;
  /** Get profit rate */
  getProfitRate?: Maybe<Scalars["Float"]>;
  /** Get list referral user */
  getProject: ProjectGql;
  /** Get related project */
  getProjects: Array<ProjectGql>;
  /** get list transaction history */
  getTransactionHistory?: Maybe<TransactionHistoryResponse>;
  /** get vip card info */
  getVipCard?: Maybe<VipCard>;
  /** get vip card info */
  getVipCardFromId?: Maybe<VipCard>;
  /** get vip user */
  getVipUsers?: Maybe<Array<User>>;
  /** get wallet address */
  getWalletAddress?: Maybe<Scalars["String"]>;
  /** check if user has password */
  hasPassWord?: Maybe<Scalars["Boolean"]>;
  /** check if user has vip card */
  hasVipCard?: Maybe<Scalars["Boolean"]>;
  /** get list of hot projects */
  hotProjects: Array<ProjectGql>;
  /** get list of projects user has invested */
  investedProjects: Array<InvestedProjectGql>;
  /** get user following project state */
  isFollowingProject?: Maybe<Scalars["Boolean"]>;
  isVoted: Scalars["Boolean"];
  /** get list of projects to recommend to user */
  recommendedProjects: Array<ProjectGql>;
  /** Auth resolver */
  temp: Scalars["String"];
};

export type QueryGetAppErrorCodeArgs = {
  error_code?: InputMaybe<ErrorCode>;
};

export type QueryGetInvestorArgs = {
  projectId: Scalars["String"];
};

export type QueryGetNftBoughtArgs = {
  projectId: Scalars["String"];
};

export type QueryGetNotificationsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetOneTimePasswordArgs = {
  address: Scalars["String"];
};

export type QueryGetProfitBalanceArgs = {
  projectId: Scalars["String"];
};

export type QueryGetProfitRateArgs = {
  projectId: Scalars["String"];
};

export type QueryGetProjectArgs = {
  id: Scalars["String"];
};

export type QueryGetProjectsArgs = {
  filter?: InputMaybe<ProjectFilter>;
  search?: InputMaybe<Scalars["String"]>;
};

export type QueryGetTransactionHistoryArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetVipCardFromIdArgs = {
  id: Scalars["String"];
};

export type QueryIsFollowingProjectArgs = {
  projectId: Scalars["String"];
};

export type QueryIsVotedArgs = {
  projectId: Scalars["String"];
};

export type RateProjectInput = {
  projectId: Scalars["String"];
  value: Scalars["Float"];
};

export type ReferralDataResponse = {
  __typename?: "ReferralDataResponse";
  _count: UserCount;
  created_at: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  facebook_id?: Maybe<Scalars["String"]>;
  google_id?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invited_by?: Maybe<Scalars["String"]>;
  kyc_verification?: Maybe<Array<UserKycVerification>>;
  password?: Maybe<Scalars["String"]>;
  profile?: Maybe<UserProfile>;
  projectNfts?: Maybe<Array<ProjectNftOwner>>;
  ref_code: Scalars["String"];
  referral_log?: Maybe<ReferralLog>;
  reward?: Maybe<Scalars["String"]>;
  role: UserRole;
  status: UserStatus;
  transaction_log?: Maybe<Array<TransactionLog>>;
  updated_at: Scalars["DateTime"];
  vipCard?: Maybe<VipCard>;
  wallet?: Maybe<Wallet>;
  wallet_address?: Maybe<Scalars["String"]>;
};

export type ReferralLog = {
  __typename?: "ReferralLog";
  created_at: Scalars["DateTime"];
  invited_by: Scalars["String"];
  is_claim: Scalars["Boolean"];
  type?: Maybe<ReferralType>;
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["ID"];
};

export enum ReferralType {
  BuyGalaxyCard = "BUY_GALAXY_CARD",
  Register = "REGISTER",
}

export type Subscription = {
  __typename?: "Subscription";
  blockchainWatcher: BlockchainTransaction;
  profitBalanceChange?: Maybe<ProjectProfitBalance>;
  pushNotification: NotificationGql;
  unseenNotifications: UnseenNotifications;
};

export type SubscriptionProfitBalanceChangeArgs = {
  projectId: Scalars["String"];
};

export type TransactionHistoryResponse = {
  __typename?: "TransactionHistoryResponse";
  count?: Maybe<Scalars["Int"]>;
  transactionHistory?: Maybe<Array<TransactionLog>>;
};

export type TransactionLog = {
  __typename?: "TransactionLog";
  amount: Scalars["Decimal"];
  blockchain_transaction?: Maybe<BlockchainTransaction>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  type: TransactionType;
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["String"];
};

export enum TransactionStatus {
  Confirming = "CONFIRMING",
  Failed = "FAILED",
  Pending = "PENDING",
  Processing = "PROCESSING",
  Succeed = "SUCCEED",
}

export enum TransactionType {
  BurnNft = "BURN_NFT",
  BuyNft = "BUY_NFT",
  ClaimProfit = "CLAIM_PROFIT",
  ClaimReferral = "CLAIM_REFERRAL",
  VipUserClaimProfit = "VIP_USER_CLAIM_PROFIT",
  WithdrawBalance = "WITHDRAW_BALANCE",
}

export type UnseenNotifications = {
  __typename?: "UnseenNotifications";
  count?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  _count: UserCount;
  created_at: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  facebook_id?: Maybe<Scalars["String"]>;
  google_id?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invited_by?: Maybe<Scalars["String"]>;
  kyc_verification?: Maybe<Array<UserKycVerification>>;
  password?: Maybe<Scalars["String"]>;
  profile?: Maybe<UserProfile>;
  projectNfts?: Maybe<Array<ProjectNftOwner>>;
  ref_code: Scalars["String"];
  referral_log?: Maybe<ReferralLog>;
  role: UserRole;
  status: UserStatus;
  transaction_log?: Maybe<Array<TransactionLog>>;
  updated_at: Scalars["DateTime"];
  vipCard?: Maybe<VipCard>;
  wallet?: Maybe<Wallet>;
  wallet_address?: Maybe<Scalars["String"]>;
};

export type UserCount = {
  __typename?: "UserCount";
  kyc_verification: Scalars["Int"];
  projectNfts: Scalars["Int"];
  transaction_log: Scalars["Int"];
};

export type UserGql = {
  __typename?: "UserGql";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  kyc_verification?: Maybe<Array<UserKycVerification>>;
  profile: ProfileGql;
  ref_code: Scalars["String"];
  referral_log?: Maybe<ReferralLog>;
  transaction_log?: Maybe<Array<TransactionLog>>;
  vipCard?: Maybe<VipCard>;
  wallet?: Maybe<Wallet>;
  wallet_address?: Maybe<Scalars["String"]>;
};

export type UserKycVerification = {
  __typename?: "UserKycVerification";
  back_id: Scalars["String"];
  created_at: Scalars["DateTime"];
  front_id: Scalars["String"];
  holding_id: Scalars["String"];
  id: Scalars["ID"];
  status: KycStatus;
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["String"];
};

export type UserProfile = {
  __typename?: "UserProfile";
  avatar?: Maybe<Scalars["String"]>;
  country_code?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  date_of_birth?: Maybe<Scalars["DateTime"]>;
  display_name?: Maybe<Scalars["String"]>;
  family_name?: Maybe<Scalars["String"]>;
  given_name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["ID"];
  user_name?: Maybe<Scalars["String"]>;
};

export enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  VipUser = "VIP_USER",
}

export enum UserStatus {
  Active = "ACTIVE",
  Banned = "BANNED",
  Pending = "PENDING",
}

export type VipCard = {
  __typename?: "VipCard";
  _count: VipCardCount;
  card_value: Scalars["Decimal"];
  change_log?: Maybe<Array<VipUserClaimProfitChangeLog>>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name: Scalars["String"];
  number: Scalars["String"];
  tier?: Maybe<VipCardTier>;
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["String"];
  valid_from?: Maybe<Scalars["DateTime"]>;
};

export type VipCardCount = {
  __typename?: "VipCardCount";
  change_log: Scalars["Int"];
};

export enum VipCardTier {
  GalaxyPremium = "GALAXY_PREMIUM",
}

export type VipUserClaimProfitChangeLog = {
  __typename?: "VipUserClaimProfitChangeLog";
  amount: Scalars["Decimal"];
  card_id: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  is_claim: Scalars["Boolean"];
  number_quarter: Scalars["Int"];
  updated_at: Scalars["DateTime"];
  vipCard: VipCard;
};

export type Wallet = {
  __typename?: "Wallet";
  balance: Scalars["Decimal"];
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
  user: User;
  user_id: Scalars["ID"];
};
