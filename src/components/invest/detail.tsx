import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useDownload } from "../../hooks/use_download";
import { formatNumber } from "../../utils/number.util";
import { Card } from "./components/card";
import ClaimProfitCard from "./components/detail/claim_profit";
import InvestImageBox from "./components/detail/image_box";
import InvestorTab from "./components/detail/investor_tab";
import InvestDetailHeader from "./components/detail/invest_detail_header";
import InvestDetailNftCard from "./components/detail/invest_detail_nft_card";
import InvestDetailSteper from "./components/detail/invest_detail_steper";
import PitchTab from "./components/detail/pitch_tab";
import SellVoteCard from "./components/detail/sell_vote_card";
import UpdatesTab from "./components/detail/updates_tab";
import VisitedProject from "./components/visited_project";
import useInvestDetail from "./hooks/use_detail";

export function InvestDetailPage() {
  const [tabIdx, setTabIdx] = useState(0);
  const {
    projectId,
    detail,
    profitBalance,
    relateProjects,
    claimProfitData,
    following,
    onToggleFollow,
    onClaimProfit,
    disableClaim,
  } = useInvestDetail();
  const { download } = useDownload();

  return (
    <Box
      sx={{
        background: "background.default",
        minHeight: "100vh",
      }}
    >
      <Box
        maxWidth="1440px"
        sx={{
          px: [6, 12, 12, 24, 36],
          pt: 22.5,
          pb: 6,
          overflow: "hidden",
          margin: "0px auto",
        }}
      >
        <InvestDetailHeader
          title={detail?.title}
          vote={detail?.profile.vote}
          totalVote={detail?.profile.total_vote ?? 0}
          address={detail?.address}
          follows={detail?.profile.follows ?? 0}
          toggleFollow={onToggleFollow}
          voting={following}
        />
        <InvestImageBox medias={detail?.profile.medias ?? []} location={detail?.location} address={detail?.address} />
        <InvestDetailSteper detail={detail} />
        <Box
          sx={{
            width: "100%",
            mt: 13,
            display: ["block", "block", "flex"],
            gap: 17,
          }}
        >
          <Box
            sx={{
              flex: "1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                ml: 5,
              }}
            >
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 0 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(0);
                }}
              >
                Pitch
              </Button>
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 1 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(1);
                }}
              >
                Updates
              </Button>
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 2 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(2);
                }}
              >
                Investors
              </Button>
            </Box>
            <Divider sx={{ mt: 4 }} />
            {tabIdx === 0 ? (
              <PitchTab
                hightlight={detail?.profile?.highlight ?? ""}
                investReason={detail?.profile?.reason_invest ?? ""}
                offers={detail?.profile.offers ?? []}
              />
            ) : tabIdx === 1 ? (
              <UpdatesTab events={detail?.profile.events ?? []} />
            ) : (
              <InvestorTab />
            )}
          </Box>
          <Box>
            <InvestDetailNftCard />
            <ClaimProfitCard
              balance={profitBalance}
              onClaim={onClaimProfit}
              loading={claimProfitData.loading || disableClaim}
            />
            <SellVoteCard />
            <Typography variant="h3" mt="24px">
              Giấy tờ pháp lý
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_download.svg" alt="" />}
              sx={{
                height: "81px",
                width: "100%",
                mt: "20px",
                color: "#6555EE",
              }}
              onClick={() => {
                if (!detail?.policy_link) {
                  return;
                }
                download(detail.policy_link, "policy.png");
              }}
            >
              Giấy tờ sử dụng nhà đất.PDF
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 8 }} />
        <Typography variant="h3" mb={6}>
          Có thể bạn quan tâm
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"],
            gap: 6,
          }}
        >
          {relateProjects?.map((item, index) => {
            if (item.id === projectId) {
              return null;
            }
            return (
              <Box key={`relate_project_${item.id}`}>
                <Card data={item} />
              </Box>
            );
          })}
        </Box>
        {/*<Divider sx={{ my: 8 }} />*/}
        {/*<Typography variant="h3" mb={6}>*/}
        {/*  Dự án bạn đã xem*/}
        {/*</Typography>*/}
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    width: "100%",*/}
        {/*    display: "grid",*/}
        {/*    gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"],*/}
        {/*    gap: 6,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {fakeData.map((item, index) => {*/}
        {/*    return (*/}
        {/*      <Box key={"invest" + index}>*/}
        {/*        <Card key={"invest" + index} {...item} isCollapseContent={false} />*/}
        {/*      </Box>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</Box>*/}
      </Box>
    </Box>
  );
}
