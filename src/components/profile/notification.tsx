import { Box } from "@mui/system";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import Link from "next/link";
import PaginatedList from "./components/paginated_list";
import { useGetNotifications } from "../../hooks/profile/use_notification";
import { NotificationGql } from "../../gql/graphql";

interface NotiCardProps {
  title: string;
  date: Date;
  content: string;
  seen: boolean;
}

const NotiCard = (props: NotiCardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        mb: 4,
        borderRadius: 4,
        background: props.seen ? "#EEE" : "#fff",
        "&:hover": {
          background: "#E4E4E4",
        },
      }}
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
  const { getNotificationsData, refetchNotifications } = useGetNotifications(1, 99);
  // const [notiList, setNotiList] = React.useState<[NotificationGql]>([]);
  //
  // React.useEffect(() => {
  //   if (getNotificationsData) {
  //     setNotiList([...notiList, ...getNotificationsData]);
  //   }
  // }, [getNotificationsData]);
  //
  // const loadMoreData = async () => {
  //   setPage(page + 1);
  //   try {
  //     const res = await refetchNotification({
  //       page: page + 1,
  //       limit: 10,
  //     });
  //     // setNotiList([...notiList,...res.data.getNotification.notifications])
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <Box mx={{ sm: 10, xs: 3, fontWeight: 400 }} my={8}>
      {/*<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>*/}
      <Typography fontWeight={700} fontSize={{ sm: 32, xs: 25 }} textAlign={{ sm: "left", xs: "center" }}>
        Thông báo
      </Typography>
      {/*  <Typography fontWeight={400} color="#7A7A7A">21/2000 thông báo</Typography>*/}
      {/*</Box>*/}
      <Box mt={2} sx={{ textAlign: "right" }}>
        <Button variant={"text"} sx={{ textTransform: "none", fontWeight: 400, pr: 0 }}>
          Đánh dấu đã xem
        </Button>
      </Box>
      <Box mt={1}>
        {getNotificationsData?.length > 0 ? (
          <PaginatedList rowsPerPage={5}>
            {getNotificationsData.map((i, idx) =>
              i?.link ? (
                <Link href={i.link}>
                  <NotiCard
                    key={idx}
                    title={i.title ?? "Place holder title"}
                    date={i.created_at}
                    content={i?.content ?? "Place holder content"}
                    seen={i.is_seen}
                  />
                </Link>
              ) : (
                <NotiCard
                  key={idx}
                  title={i.title ?? "Place holder title"}
                  date={i.created_at}
                  content={i?.content ?? "Place holder content"}
                  seen={i.is_seen}
                />
              ),
            )}
          </PaginatedList>
        ) : (
          <Box>
            <Typography>No notifications to display</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
