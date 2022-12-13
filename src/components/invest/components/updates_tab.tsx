import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";

export default function UpdatesTab() {
  return (
    <Box
      sx={{
        width: "100%",
        // background: "red",
      }}
    >
      <Timeline sx={{ p: 0 }}>
        <Pharse
          time={`17 Oct, \n2020`}
          title="Deserunt ullamco est sit aliqua dolor"
          content="Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, 
          khu biệt thự thấp tầng Mannhattan, bến du thuyền, sông Tắc và cả sông Đồng Nai.
          Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng – độc đáo – khác biệt."
        />
        <Pharse
          time={`22 Oct, \n2020`}
          title="Deserunt ullamco est sit aliqua dolor"
          content="Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, 
          khu biệt thự thấp tầng Mannhattan, bến du thuyền, sông Tắc và cả sông Đồng Nai.
          Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng – độc đáo – khác biệt."
        />
        <Pharse
          time={`8 Sep,
          2020`}
          title="Deserunt ullamco est sit aliqua dolor"
          content="Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, 
          khu biệt thự thấp tầng Mannhattan, bến du thuyền, sông Tắc và cả sông Đồng Nai.
          Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng – độc đáo – khác biệt."
        />
        <Pharse
          time={`17 Oct, \n2020`}
          title="Deserunt ullamco est sit aliqua dolor"
          content="Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, 
          khu biệt thự thấp tầng Mannhattan, bến du thuyền, sông Tắc và cả sông Đồng Nai.
          Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng – độc đáo – khác biệt."
        />
        <Pharse
          time={`1 Feb,
          2020`}
          title="Deserunt ullamco est sit aliqua dolor"
          content="Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, 
          khu biệt thự thấp tầng Mannhattan, bến du thuyền, sông Tắc và cả sông Đồng Nai.
          Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng – độc đáo – khác biệt."
          isEnd
        />
      </Timeline>
    </Box>
  );
}

function Pharse({ isEnd, time, title, content }: { isEnd?: boolean; time: string; title: string; content: string }) {
  return (
    <TimelineItem
      sx={{
        ":before": {
          flex: 0,
          p: 0,
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot color="primary" />
        {!isEnd ? <TimelineConnector sx={{ background: "#5946FF" }} /> : null}
      </TimelineSeparator>
      <TimelineContent>
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h5" whiteSpace="pre-line" lineHeight="18px">
              {time}
            </Typography>
            <Box sx={{ flex: 1, ml: ["24px", "43px"] }}>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h5" mt="8px">
                {content}
              </Typography>
            </Box>
          </Box>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
