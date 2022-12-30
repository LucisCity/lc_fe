import { Box } from "@mui/system";
import { Button, Card, CardContent, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import PaginatedList from "./components/paginated_list";
import {
  useGetNotifications,
  useSeenAllNotis,
  useSeenNotification,
  useSubToNewNoti,
} from "../../hooks/profile/use_notification";
import { NotificationGql } from "../../gql/graphql";
import { isEmpty } from "lodash";

interface NotiCardProps {
  title: string;
  date: Date;
  content: string;
  seen: boolean;
  onClick: (id: number) => Promise<void>;
  id: string;
}

const NotiCard = (props: NotiCardProps) => {
  const [seen, setSeen] = React.useState<boolean>(props.seen);
  const handleClickNotiCard = async () => {
    if (!seen) {
      setSeen(true);
      await props.onClick(Number(props.id));
    }
  };

  useEffect(() => {
    setSeen(props.seen);
  }, [props.seen]);
  return (
    <Card
      elevation={0}
      sx={{
        mb: 4,
        borderRadius: 4,
        background: seen ? "#EEE" : "#fff",
        "&:hover": {
          background: "#E4E4E4",
        },
      }}
      onClick={handleClickNotiCard}
    >
      <CardContent sx={{ py: 5, px: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant={"h3"}>{props.title}</Typography>
          <Typography color={"#7A7A7A"}>{moment(props.date).format("MMM D, YYYY HH:mm")}</Typography>
        </Box>
        <Typography mt={3} color={"#A19EB7"}>
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const notis = [
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 1000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 2000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 3000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 4000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
  {
    title: "President of Sales",
    date: new Date(Date.now() + 5000),
    link: "/invest",
    seen: Math.random() > 0.5,
    content:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with...",
  },
];

export const ProfileNotification = () => {
  // const [page, setPage] = React.useState(1);
  const { getNotificationsData, refetchNotifications, getNotificationsLoading } = useGetNotifications(1, 99);
  const [notiList, setNotiList] = React.useState<NotificationGql[]>([]);

  const { newNoti } = useSubToNewNoti();
  // console.log(`useSubToNewNoti data ${JSON.stringify(newNoti)}`);

  React.useEffect(() => {
    if (getNotificationsData) {
      setNotiList(getNotificationsData);
    }
  }, [getNotificationsData]);

  React.useEffect(() => {
    // console.log("new noti useEffect reached");
    // console.log(`noti list length before ${notiList.length}`);
    if (newNoti) {
      // console.log(`newNoti ${JSON.stringify(newNoti)}`);
      setNotiList((notiList) => [newNoti, ...notiList]);
    }
  }, [newNoti]);

  const { seenAllNotis, loadingSeenAllNotis } = useSeenAllNotis();

  const handleSeenAllNotis = async () => {
    seenAllNotis();
    // eslint-disable-next-line
    setNotiList((notiList) => notiList.map((i) => ({ ...i, is_seen: true })));
  };

  const { seenNotification, loadingSeenNotification } = useSeenNotification();
  const handleClickNoti = async (id: number) => {
    // console.log("handleClickNoti reached");
    await seenNotification({
      variables: {
        id,
      },
    });
  };

  return (
    <Box mx={{ sm: 10, xs: 3, fontWeight: 400 }} my={8}>
      {/*<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>*/}
      <Typography fontWeight={700} fontSize={{ sm: 32, xs: 25 }} textAlign={{ sm: "left", xs: "center" }}>
        Thông báo
      </Typography>
      {/*  <Typography fontWeight={400} color="#7A7A7A">21/2000 thông báo</Typography>*/}
      {/*</Box>*/}
      <Box mt={2} sx={{ textAlign: "right" }}>
        <Button variant={"text"} sx={{ textTransform: "none", fontWeight: 400, pr: 0 }} onClick={handleSeenAllNotis}>
          Đánh dấu đã xem
        </Button>
      </Box>
      {getNotificationsLoading ? (
        <Box mt={1}>
          <PaginatedList rowsPerPage={5}>
            {Array.from({ length: 5 }).map(() => (
              <Skeleton
                height={100}
                variant={"rounded"}
                sx={{
                  mb: 4,
                  borderRadius: 4,
                }}
              />
            ))}
          </PaginatedList>
        </Box>
      ) : (
        <Box mt={1}>
          {notiList?.length > 0 ? (
            <PaginatedList rowsPerPage={5}>
              {notiList.map((i, idx) => {
                return i?.link ? (
                  <Link key={idx} href={i.link}>
                    <NotiCard
                      id={i.id}
                      title={i.title ?? "Place holder title"}
                      date={i.created_at}
                      content={i?.content ?? "Place holder content"}
                      seen={i.is_seen}
                      onClick={handleClickNoti}
                    />
                  </Link>
                ) : (
                  <NotiCard
                    key={idx}
                    id={i.id}
                    title={i.title ?? "Place holder title"}
                    date={i.created_at}
                    content={i?.content ?? "Place holder content"}
                    seen={i.is_seen}
                    onClick={handleClickNoti}
                  />
                );
              })}
            </PaginatedList>
          ) : (
            <Box>
              <Typography>No notifications to display</Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
