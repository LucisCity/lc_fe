import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { Box } from "@mui/material";
import { ProjectGql } from "../../../../gql/graphql";
import { formatDate } from "../../../../utils/date.util";
const DEFAULT_STEP_LABELS = [
  "Chuẩn bị mở bán",
  "Mở bán",
  "Dự kiến sinh lời",
  "Đang sinh lời",
  "Đang chờ bán",
  "Kết thúc",
];
const DEFAULT_STEP = ["", "Mở bán", "Dự kiến sinh lời", "Đang sinh lời", "Đang chờ bán", ""];
interface IProps {
  detail?: ProjectGql;
}
export default function InvestDetailSteper({ detail }: IProps) {
  const { steps, activeIndex } = React.useMemo(() => {
    const steps = [""];
    let activeIndex = 0;
    if (!detail) {
      return { steps: DEFAULT_STEP, activeIndex };
    }
    if (new Date(detail.open_sale_at) <= new Date()) {
      steps.push(formatDate(detail.open_sale_at, "dd, MMM, yyyy"));
      activeIndex = 1;
    } else {
      steps.push("");
    }

    if (new Date(detail.take_profit_at) <= new Date()) {
      steps.push(formatDate(detail.take_profit_at, "dd, MMM, yyyy"));
    } else {
      steps.push("");
    }

    if (new Date(detail.take_profit_at) <= new Date()) {
      steps.push(formatDate(detail.take_profit_at, "dd, MMM, yyyy"));
    } else {
      steps.push("");
    }

    const now = new Date();
    if (detail.start_time_vote_sell && now > new Date(detail.start_time_vote_sell)) {
      steps.push(formatDate(detail.start_time_vote_sell, "dd, MMM, yyyy"));
    } else {
      steps.push("");
    }

    steps.push("");
    return { steps, activeIndex };
  }, [detail]);

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        // display: ["none", "inherit"],
      }}
    >
      <Box
        mt={7}
        sx={{
          position: "relative",
          minWidth: "1024px",
          // display: ["none", "inherit"],
        }}
      >
        <Stack sx={{ width: "100%", mt: 4 }} spacing={4}>
          <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
            {DEFAULT_STEP_LABELS.map((label, idx) => (
              <Step key={`${label}_idx_${idx}`}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stepper alternativeLabel activeStep={activeIndex} connector={<ProjectStepConnector />}>
            {steps.map((label, idx) => (
              <Step key={`${label}_idx_${idx}`}>
                <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Box>
    </Box>
  );
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    display: "none",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
  display: "none",
}));

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

const ProjectStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 8,
    left: "calc(-50% + 8px)",
    right: "calc(50% + 8px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      background: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      background: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const StepIconContainer = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 18,
  height: 18,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: theme.palette.primary.main,
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    background: theme.palette.primary.main,
  }),
}));

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StepIconContainer ownerState={{ completed, active }} className={className}>
      {/* {icons[String(props.icon)]} */}
    </StepIconContainer>
  );
}
