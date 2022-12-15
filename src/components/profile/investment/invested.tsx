import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import MuiCard from "@mui/material/Card";
import Link from "next/link";
import { Button, Card, CardActionArea, CardContent, LinearProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import StackAnim from "../../anim/stack_anim";

const fakeData = [
  {
    label: "VincomBaTrieu",
    name: "VincomBaTrieu",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123532",
    image:
      "https://statics.vincom.com.vn/vincom-tttm/gioi_thieu/anh_bai_viet/Hinh-anh-cac-thuong-hieu-o-Vincom-Ba-Trieu-so-1_1632322535.jpeg",
  },
  {
    label: "NovaLand",
    name: "NovaLand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "624542",
    image:
      "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/12/9/photo1670561661183-16705616612862130643853.jpeg",
  },
  {
    label: "Ocenpark",
    name: "Ocenpark",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123537",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Royal City",
    name: "Royal City",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "343632",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Phú Nhuận",
    name: "Phú Nhuận",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53638",
    image: "https://batdongsanhungthinh.com.vn/wp-content/uploads/2017/10/Orchard-parkview-1.jpg",
  },
  {
    label: "Grandland",
    name: "Grandland",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "223032",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Aqualand",
    name: "Aqualand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "127532",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8TOGifEREG12639XMUxwB92qhsagOV7U06C_flRDp1DSD2Vk87DvwFu2rLyeNCCOdIs&usqp=CAU",
  },
  {
    label: "Thanh Bình Park",
    name: "Thanh Bình Park",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53032",
    image: "https://danhkhoireal.vn/wp-content/uploads/2019/01/masteri-parkland.jpg",
  },
];

const fadeVariant = {
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: 20},
};

const Icon = styled("img")(({theme}) => ({
  marginRight: theme.spacing(2),
  width: 10,
  height: 10,
}));

interface IProps {
  isCollapseContent?: boolean;
  name?: string;
  address?: string;
  price?: string;
  image?: string;
}

const HighlightCard = (props: IProps) => {
  return (
    <Card sx={{borderRadius: 4}} elevation={0}>
      <Link href={`/invest/${props.name}`}>
        <CardActionArea component={"div"}>
          <Grid container sx={{px: 3, py: 4}} spacing={3}>
            <Grid item xs={12} sm={4}>
              <CardMedia
                sx={{borderRadius: 4, maxHeight: 182, height: "100%"}}
                component="img"
                image={props.image}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={8} container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box mb={1} display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
                  <Typography variant="h3">
                    {props.name}
                  </Typography>
                  <Typography variant="h4" color={"#33E179"}>
                    ($230.02)
                  </Typography>
                </Box>
                <Typography color="text.secondary" lineHeight={1.4} fontSize={12}>
                  {props.address}
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12} display={{sm: "inline", xs: "flex"}}
                    flexDirection={{sm: "column", xs: "row"}}>
                <Box display={"flex"} justifyContent={{sm: "flex-end"}} width={{sm: "100%", xs: "50%"}}>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={(theme) => ({
                      background: "rgba(0, 218, 87, 0.8)",
                      color: "#fff",
                      width: 80,
                      height: 40,
                      marginRight: 1,
                      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
                    })}
                  >
                    <Typography whiteSpace={"nowrap"}>Sinh lời</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={(theme) => ({
                      color: "#FF6C6C",
                      background: "#F9F9F9",
                      width: 80,
                      height: 40,
                      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
                    })}
                    endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt=""/>}
                  >
                    235
                  </Button>
                </Box>
                <Box mt={{sm: 3, xs: 4}} mb={{sm: 3}} width={{sm: "100%", xs: "50%"}}>
                  <LinearProgress variant="determinate" value={30}/>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={{md: "80%", xs: "100%"}}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar.svg"/>
                      Tổng giá trị
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>${props.price}</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/total_supply.svg"/>
                      Tokens sở hữu
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>530</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={{md: "80%", xs: "100%"}}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/home.svg"/>
                      Giá mua vào
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>$100.00</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/sale.svg"/>
                      Lợi nhuận
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>10%</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained">
                  Buy/Sell
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Box display={"flex"}>
                  <Button
                    variant="contained"
                    disabled
                    sx={{mr: 1}}
                  >
                    Vote
                  </Button>
                  <Button variant="contained">
                    Claim
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default function InvestmentInvested() {

  return (
    <React.Fragment>
      {fakeData.map((i) => (
        <Box px={{md: 4}} pt={{xs: 4}}>
          <StackAnim order={0} step={0.1} variants={fadeVariant} duration={0.6}>
            <HighlightCard {...i} />
          </StackAnim>
        </Box>
      ))}
    </React.Fragment>
  )
}