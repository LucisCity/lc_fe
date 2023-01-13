import { Box } from "@mui/system";
import { Button, Grid, Paper, Typography } from "@mui/material";
import DashboardTable from "./dashboard_table";
import React from "react";
// import { useStores } from "../../store";
import SvgIcon from "../../common/svg_icon";
import UserStore from "../../../store/user.store";
import { formatCurrency, formatNumber } from "../../../utils/number.util";
import WithdrawConfirmPopup from "../components/withdraw_confirm_popup";
import { gql, useQuery } from "@apollo/client";

const iconSrc = "/assets/imgs/icon/";

const GET_DASHBOARD = gql`
  query getDashboard {
    getDashboard {
      profitRate
      totalAssetsBalance
      totalInvestedBalance
    }
  }
`;
const DashBoardItems = () => {
  const balance = UserStore.user?.wallet?.balance;

  const { data } = useQuery(GET_DASHBOARD, { fetchPolicy: "no-cache" });
  const tutorialStepData = [
    {
      position: 1,
      title: "Tổng tài sản ước tính",
      content: formatCurrency(Number(data?.getDashboard?.totalAssetsBalance) ?? ""),
      svgSrc: iconSrc + "total_asset.svg",
    },
    {
      position: 2,
      title: "Số tiền đã đầu tư",
      content: formatCurrency(Number(data?.getDashboard?.totalInvestedBalance) ?? ""),
      svgSrc: iconSrc + "invested_amount.svg",
    },

    {
      position: 3,
      title: "Tỉ suất lợi nhuận",
      content: formatNumber(data?.getDashboard?.profitRate ?? "", { maximumFractionDigits: 3 }) + "%",
      svgSrc: iconSrc + "profit.svg",
    },
    {
      position: 4,
      title: "Số dư hiện tại",
      content: formatCurrency(Number(balance ?? 0) ?? ""),
      svgSrc: iconSrc + "surplus.svg",
    },
  ];
  return (
    <>
      {tutorialStepData.map((item, index) => (
        <React.Fragment key={item.title}>
          <Grid item xs={12} sm={6} md={3} height={"inherit"} my={{ md: 2 }}>
            <Paper
              elevation={index === 0 ? 5 : 0}
              sx={{
                borderRadius: 4,
                px: { sm: 4, xs: 7 },
                // pl: {md: 4, sm: 4, xs: 1},
                py: 5,
                height: "100%",
                background: `${index === 0 ? "#6555EE" : "#fff"}`,
                color: `${index === 0 ? "#fff" : "#504C67"}`,
              }}
            >
              <Box
                width={40}
                height={40}
                sx={{ background: index === 0 ? "#fff" : "#504C67" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={2}
              >
                <SvgIcon src={item.svgSrc} />
              </Box>
              <Typography fontSize={{ lg: 16, md: 13, xs: 16 }} my={2}>
                {item.title}
              </Typography>
              <Typography fontSize={{ lg: 25, md: 20, xs: 30 }} fontWeight={600}>
                {item.content}
              </Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

export const ProfileDashboard = () => {
  const [openPopup, setOpenPopup] = React.useState(false);
  const onWithdraw = () => {
    setOpenPopup(true);
  };
  return (
    <Box mx={{ sm: 10, xs: 3 }} my={7}>
      {openPopup && <WithdrawConfirmPopup onClose={() => setOpenPopup(false)} />}

      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography fontWeight={700} fontSize={{ sm: 32, xs: 25 }} textAlign={{ sm: "left", xs: "center" }}>
          Dashboard
        </Typography>
        <Button onClick={onWithdraw} variant={"contained"}>
          Rút tiền
        </Button>
      </Box>
      <Box mt={5} mx={{ sm: 0, xs: 6 }}>
        <Grid container direction={{ sm: "row", xs: "column" }} spacing={2} height={"auto"}>
          <DashBoardItems />
        </Grid>
      </Box>
      <Typography variant={"h3"} textAlign={{ sm: "left", xs: "center" }} my={5}>
        Lịch sử giao dịch
      </Typography>
      <DashboardTable rowsPerPage={10} />
    </Box>
  );
};
