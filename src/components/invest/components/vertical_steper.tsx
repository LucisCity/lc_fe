import { Box, Typography } from "@mui/material";
import { Center } from "../../common/center";

interface IStepProps {
  activeIndex: number;
  index: number;
  title: string;
  content?: JSX.Element;
  subTitle?: string;
  isLast?: boolean;
}

function VerticalStep({ index, activeIndex, title, subTitle, content, isLast }: IStepProps) {
  const _isActive = activeIndex == index;
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "20px",
        }}
      >
        <Center
          sx={{
            background: "primary.main",
            width: "20px",
            height: "20px",
            textAlign: "center",
            color: "white",
            fontSize: "11px",
            borderRadius: "50%",
            //   opacity: {_isActive ? 1 : 0.4}
          }}
        >
          {_isActive ? <Box component="img" src="/svg/ic_tick.svg" alt="" /> : <Typography>{index}</Typography>}
        </Center>
        {!isLast && (
          <Box
            sx={{
              width: "1px",
              flex: "1",
              background: "primary.main",
            }}
          />
        )}
      </Box>
      <Box flex="1" ml="8px">
        <Typography variant="subtitle2" color={_isActive ? "primary" : "text"} mb={_isActive ? "" : "8px"}>
          {title}
        </Typography>
        {_isActive ? content : subTitle && <Typography>{subTitle}</Typography>}
      </Box>
    </Box>
  );
}
