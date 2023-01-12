import { ApolloError, gql, useLazyQuery, useMutation, useQuery, useSubscription } from "@apollo/client";
import { ErrorCode, NotificationGql } from "../../gql/graphql";
import { useSnackbar } from "notistack";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useEffect } from "react";
import userStore from "../../store/user.store";

export const GET_NOTIFICATIONS = gql`
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

export function useGetNotifications(
  page: number,
  limit: number,
): {
  getNotificationsLoading: any;
  getNotificationsError: any;
  refetchNotifications: any;
  getNotificationsData: NotificationGql[];
} {
  const {
    loading: getNotificationsLoading,
    error: getNotificationsError,
    data,
    refetch: refetchNotifications,
  } = useQuery(GET_NOTIFICATIONS, {
    variables: {
      page: page,
      limit: limit,
    },
  });
  // console.log(`getNotification data ${JSON.stringify(data)}`);

  return {
    getNotificationsLoading,
    getNotificationsError,
    refetchNotifications,
    getNotificationsData: data?.getNotifications,
  };
}

export const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription {
    pushNotification {
      id
      user_id
      title
      content
      is_seen
      link
      created_at
    }
  }
`;

export function useSubToNewNoti() {
  const { data, loading } = useSubscription(NOTIFICATIONS_SUBSCRIPTION);

  return {
    newNoti: data?.pushNotification,
    loadingNewNoti: loading,
  };
}

export const UNSEEN_NOTIFICATIONS = gql`
  query unseenNotis {
    countUnseenNotifications
  }
`;

export function useUnseenNotifications(): {
  loadingUnseenNotis: boolean;
  errorUnseenNotis: ApolloError | undefined;
  dataUnseenNotis: number;
} {
  const [getUnseenNotify, unseenData] = useLazyQuery<{ countUnseenNotifications: any }>(UNSEEN_NOTIFICATIONS, {});

  useEffect(() => {
    if (userStore.isLoggedIn) {
      getUnseenNotify();
    }
  }, []);

  return {
    loadingUnseenNotis: unseenData.loading,
    errorUnseenNotis: unseenData.error,
    dataUnseenNotis: unseenData.data?.countUnseenNotifications,
  };
}

export const UNSEEN_NOTIS_SUBSCRIPTION = gql`
  subscription {
    unseenNotifications {
      count
    }
  }
`;

export function useSubToUnseenNotiCount() {
  // if (!userId) return null;
  const { data, loading } = useSubscription(UNSEEN_NOTIS_SUBSCRIPTION);

  return {
    newData: data?.unseenNotifications.count,
    loadingNewData: loading,
  };
}

export const SEEN_ALL_NOTIS = gql`
  mutation {
    markAllNotisSeen
  }
`;

export function useSeenAllNotis(): {
  seenAllNotis: any;
  loadingSeenAllNotis: boolean;
} {
  const { enqueueSnackbar } = useSnackbar();

  const [seenAllNotis, { loading: loadingSeenAllNotis }] = useMutation(SEEN_ALL_NOTIS, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
    fetchPolicy: "no-cache",
  });

  return {
    seenAllNotis,
    loadingSeenAllNotis,
  };
}

export const SEEN_NOTIFICATION = gql`
  mutation ($id: Int!) {
    seenNotification(id: $id)
  }
`;

export function useSeenNotification(): {
  seenNotification: any;
  loadingSeenNotification: boolean;
} {
  const { enqueueSnackbar } = useSnackbar();

  const [seenNotification, { loading: loadingSeenNotification }] = useMutation(SEEN_NOTIFICATION, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
    fetchPolicy: "no-cache",
  });

  return {
    seenNotification,
    loadingSeenNotification,
  };
}
