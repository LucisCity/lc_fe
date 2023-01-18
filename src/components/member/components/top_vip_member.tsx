import React from "react";
import { Box, Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import ClaimProfitCard from "../../invest/components/detail/claim_profit";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { formatCurrency } from "../../../utils/number.util";
import { CardActions, Chip, Divider, Popper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { SearchOption } from "../../invest/components/search_option";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MuiCard from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Search } from "../../invest/components/search_project";
import { useVipMember } from "../hooks/use_vipmember";
import { Scalars } from "../../../gql/graphql";

const fakeData = [
  {
    title: "Du thuyền 5 sao  LUXURY",
    des: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    image:
      "https://znews-photo.zingcdn.me/w660/Uploaded/mdf_qsklky/2018_05_04/Diem_danh_16_sieu_du_thuyen_xa_hoa_nhat_hanh_tinh_1.jpg",
  },
  {
    title: "Galaxy Bar",
    des: "2118 Thornridge Cir. Syracuse, Connecticut Connecticut 35624",
    image:
      "https://images.squarespace-cdn.com/content/v1/5876d81c5016e15c31366fcd/1593556305562-Y8D3K1QJLCMGQ9IVPU6O/MAH_2574-edit_REV.jpg?format=2500w",
  },
  {
    title: "6 Sense Bar",
    des: "2715 Ash Dr. San Jose, South Dakota Connecticut 83475",
    image:
      "https://media.cntraveller.com/photos/62305cd2908a6ce1c674d3b1/16:9/w_2580,c_limit/SEED%20LIBRARY--mar22-pr%20CAITLIN%20ISOLA%20.jpeg",
  },
  {
    title: "Porcher",
    des: "3891 Ranchview Dr. Richardson, California 62639",
    image: "https://cdn.motor1.com/images/mgl/YpkZ0/s1/4x3/2035-porsche-99x-ev-sports-car.webp",
  },
  {
    title: "G63",
    des: "2464 Royal Ln. Mesa, New Jersey 45463",
    image:
      // eslint-disable-next-line max-len
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/2019-Mercedes-AMG-G63-101.jpg?crop=0.548xw:0.675xh;0.144xw,0.207xh&resize=640:*",
  },
  {
    title: "Bugati",
    des: "3517 W. Gray St. Utica, Pennsylvania 57867",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bugatti_Chiron_%2836559710091%29.jpg/1200px-Bugatti_Chiron_%2836559710091%29.jpg",
  },
  {
    title: "Classic Car",
    des: "3517 W. Gray St. Utica, Pennsylvania 57867",
    image: "https://www.thestatesman.com/wp-content/uploads/2022/03/iStock-588605048-1.jpg",
  },
  {
    title: "Máy bay riêng",
    des: "3517 W. Gray St. Utica, Pennsylvania 57867",
    image:
      // eslint-disable-next-line max-len
      "https://vcdn1-kinhdoanh.vnecdn.net/2021/11/20/bombardier-1637390727-3625-1637390815.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=YFLvyzJfIefpHWH5AdZXXw",
  },
  {
    title: "Biệt thự",
    des: "3517 W. Gray St. Utica, Pennsylvania 57867",
    image: "https://www.hancorp.com.vn/wp-content/uploads/2021/08/biet-thu-co-dien-2.png",
  },
];

const CardItem = ({ position, data }: { position?: "top1" | "top2" | "top3" | "topn"; data: any }) => {
  return (
    <Box component={Paper} sx={{ borderRadius: 2 }} elevation={1} mb={2}>
      <Box
        display={"flex"}
        alignItems={"center"}
        pl={3}
        pr={6}
        py={3}
        justifyContent={"space-between"}
        borderRadius={2}
        sx={{
          background:
            position === "top1"
              ? "linear-gradient(180deg, #778AED 0%, #8274F9 0.01%, #6555EE 53.65%, #4A3CC1 98.44%)"
              : "",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          {position === "top1" ? (
            <img src="/assets/imgs/member/tick-square-while.svg" alt="" />
          ) : position === "top2" || position === "top3" ? (
            <img src="/assets/imgs/member/tick-square.svg" alt="" />
          ) : (
            <img src="/assets/imgs/member/tick-square-normal.svg" alt="" />
          )}
          <Avatar sx={{ ml: 2 }} src={data?.profile?.avatar}>
            {data?.profile?.avatar ?? data?.email[0]}
          </Avatar>
          <Box ml={2} display={"flex"} flexDirection={"column"}>
            <Typography variant={"h5"} color={position === "top1" ? "#fff" : "#504C67"}>
              {data?.profile?.display_name}
            </Typography>
            <Typography variant={"caption"} color={position === "top1" ? "#fff" : "#504C67"}>
              {data?.email}
            </Typography>
          </Box>
        </Box>
        {/*<Typography color={position === "top1" ? "#fff" : "#504C67"}>{formatCurrency(432)}</Typography>*/}
      </Box>
    </Box>
  );
};

const ServiceCard = ({ data }: { data: any }) => {
  return (
    <MuiCard sx={{ borderRadius: 2, position: "relative", p: 3, height: "100%" }} elevation={0}>
      <CardMedia sx={{ borderRadius: 2 }} component="img" height="125" image={data.image} alt={data.title} />
      <CardContent sx={{ p: 0, pb: 0 }}>
        <Typography variant="h5" mt={3}>
          {data.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" height={200}>
          {data.des}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0, pb: 0 }}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Button variant={"contained"} fullWidth>
            Đặt ngay
          </Button>
        </Box>
      </CardActions>
    </MuiCard>
  );
};

export const TopVipMember = () => {
  const { profit, loadingProfit, claimProfitForVipUser, data: vipMemberList } = useVipMember();

  const profitBalance = {
    balance: isNaN(Number(profit)) ? 0 : Number(profit),
  };
  return (
    <Box mt={10}>
      <Container component={"div"}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <ClaimProfitCard balance={profitBalance} onClaim={claimProfitForVipUser} loading={loadingProfit} />
            <Typography variant="h3" mt={6} mb={6}>
              Danh sách thành viên
            </Typography>
            <Box bgcolor={"#F9F9F9"} px={{ xs: 3, sm: 5 }} borderRadius={2} py={4}>
              {vipMemberList && vipMemberList.length > 0 ? (
                <>
                  {vipMemberList?.[0] && (
                    <Box>
                      <Typography variant={"body2"} mb={2} ml={3}>
                        Top 1
                      </Typography>
                      <CardItem position={"top1"} data={vipMemberList[0]} />
                    </Box>
                  )}
                  {vipMemberList?.[1] && (
                    <Box>
                      <Typography variant={"body2"} mb={2} ml={3}>
                        Top 2
                      </Typography>
                      <CardItem position={"top2"} data={vipMemberList[1]} />
                    </Box>
                  )}
                  {vipMemberList?.[2] && (
                    <Box>
                      <Typography variant={"body2"} mb={2} ml={3}>
                        Top 3
                      </Typography>
                      <CardItem position={"top3"} data={vipMemberList[2]} />
                    </Box>
                  )}
                  <Divider sx={{ my: 5 }} />
                  <Box>
                    {vipMemberList.slice(3)?.map((item) => (
                      <CardItem key={item.id} data={item} />
                    ))}
                  </Box>
                </>
              ) : null}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8}>
            <Box mt={6}>
              <Box
                display={"flex"}
                flexDirection={{ sm: "column", md: "row" }}
                gap={2}
                justifyContent={"space-between"}
              >
                <Typography variant="h3">Danh sách dịch vụ</Typography>
                <Search
                  sx={{ width: { sm: "100%", md: 290 } }}
                  fullWidth
                  autoComplete={false}
                  // disablePortal
                  freeSolo
                  PopperComponent={(prop) => (
                    <Popper
                      {...prop}
                      sx={{ width: { xs: "auto", sm: "500px !important" } }}
                      placement={"bottom-start"}
                    />
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant={"filled"}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <img src={"/assets/imgs/invest/icons/search.svg"} style={{ marginRight: 12 }} />
                        ),
                        style: {
                          padding: 0,
                          paddingLeft: 12,
                          height: 40,
                        },
                      }}
                      placeholder={"Tìm kiếm dịch vụ bạn quan tâm"}
                    />
                  )}
                  options={[]}
                  getOptionLabel={(option: any) => option?.title}
                  renderOption={(props, option) => (
                    // @ts-ignore
                    <Box p={1} {...props}>
                      {/* @ts-ignore */}
                      <SearchOption data={option} />
                    </Box>
                  )}
                />
              </Box>
              <Box bgcolor={"#F9F9F9"} px={{ xs: 3, sm: 5 }} borderRadius={2} pt={4} mt={2} pb={10}>
                <Box display={"flex"} alignItems={"center"} mb={6}>
                  <Typography variant={"h5"} mr={2}>
                    Cung cấp bởi:
                  </Typography>
                  <Box>
                    <Chip label={"Lucis City"} sx={{ borderRadius: 1, mr: 1 }} />
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {fakeData.map((item, index) => (
                    <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
                      <ServiceCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
