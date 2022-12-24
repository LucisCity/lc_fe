import { gql, useQuery } from "@apollo/client";
import { NotificationGql } from "../../gql/graphql";

const GET_NOTIFICATIONS = gql`
  query ($page: Int!, $limit: Int!) {
    getNotifications(page: $page, limit: $limit) {
      id
      user_id
      is_seen
      title
      content
      created_at
      link
    }
  }
`;

export const useGetNotifications = (
  page: number,
  limit: number,
): {
  getNotificationsLoading: any;
  getNotificationsError: any;
  refetchNotifications: any;
  getNotificationsData: NotificationGql[];
} => {
  const {
    loading: getNotificationsLoading,
    error: getNotificationsError,
    data,
    refetch: refetchNotifications,
  } = useQuery(GET_NOTIFICATIONS, {
    fetchPolicy: "no-cache",
    variables: {
      page: page,
      limit: limit,
    },
  });

  console.log(`getNotification data ${JSON.stringify(data)}`);

  return {
    getNotificationsLoading,
    getNotificationsError,
    refetchNotifications,
    getNotificationsData: data?.getNotifications,
  };
};
