/* eslint-disable */
import { Box } from "@mui/system";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import Link from "next/link";

interface NotiCardProps {
  title: string;
  date: Date;
  content: string;
  seen: boolean;
  link: string;
}

const NotiCard = (props: NotiCardProps) => {

  return (
    <Link href={props.link}>
      <Card
        elevation={0}
        sx={{
          mb: 4,
          borderRadius: 4,
          background: props.seen ? '#EEE' : '#fff',
        }}
      >
        <CardContent sx={{py: 5, px: 6}}>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant={"h3"}>
              {props.title}
            </Typography>
            <Typography color={"#7A7A7A"}>
              {moment(props.date).format("MMM D, YYYY HH:mm")}
            </Typography>
          </Box>
          <Typography mt={3} color={"#A19EB7"}>
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

const notis: NotiCardProps[] = [
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
  {
    title: "President of Sales",
    date: new Date(),
    link: "/invest",
    seen: Math.random() > 0.5,
    content: "Physiological respiration involves the mechanisms that ensure that the composition of the functional " +
      "residual capacity is kept constant, and equilibrates with..."
  },
]

export const ProfileNotification = () => {
  return (
    <Box mx={{sm: 10, xs: 3, fontWeight: 400}} my={8}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
        <Typography
          fontWeight={700}
          fontSize={{sm: 32, xs: 25}}
          textAlign={{sm: "left", xs: "center"}}
        >
          Thông báo
        </Typography>
        <Typography fontWeight={400} color="#7A7A7A">21/2000 thông báo</Typography>
      </Box>
      <Box mt={2} sx={{textAlign: "right"}}>
        <Button variant={"text"} sx={{textTransform: "none", fontWeight: 400, pr: 0}}>Đánh dấu đã xem</Button>
      </Box>
      <Box mt={1}>
        {notis.map((i) => (
          <NotiCard title={i.title} date={i.date} content={i.content} seen={i.seen} link={i.link}/>
        ))}
      </Box>
    </Box>
  )
}
