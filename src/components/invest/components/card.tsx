import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Collapse, IconButton, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ProjectGql } from "../../../gql/graphql";
import { ProjectSalePeriod, ProjectStatus } from "../../profile/investment/components/project_card";
import { slugify } from "../../../utils/string.util";
import { formatCurrency } from "../../../utils/number.util";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(3),
  width: 10,
  height: 10,
}));

const ImageContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
  padding: theme.spacing(3),
  width: "100%",
}));

interface IProps {
  isCollapseContent?: boolean;
  data: ProjectGql;
}
export const Card = (props: IProps) => {
  const [state, setState] = React.useState(props?.isCollapseContent ?? true);
  const {
    ended,
    start_time_vote_sell: waitTransferAt,
    open_sale_at: openSaleAt,
    take_profit_at: takeProfitAt,
  } = props.data;
  const salePeriod = React.useMemo(() => {
    return ended
      ? ProjectSalePeriod.CLOSED
      : waitTransferAt && new Date() > new Date(waitTransferAt)
      ? ProjectSalePeriod.TRANSFERRING
      : takeProfitAt && new Date() > new Date(takeProfitAt)
      ? ProjectSalePeriod.PROFITING
      : openSaleAt && new Date() > new Date(openSaleAt)
      ? ProjectSalePeriod.OPEN
      : ProjectSalePeriod.UPCOMING;
  }, [waitTransferAt, takeProfitAt, openSaleAt, ended]);
  return (
    <MuiCard sx={{ borderRadius: 4, position: "relative" }} elevation={1}>
      <Link href={`/invest/${slugify(props.data.title)}.${props.data.id}`}>
        <CardActionArea component={"div"}>
          <CardMedia
            sx={{ borderRadius: 4 }}
            component="img"
            height="130"
            image={props.data.thumbnail}
            alt={props.data.title}
          />
          <CardContent sx={{ p: 5, pb: 0 }}>
            <Typography variant="h3" mb={1}>
              {props.data.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {props.data.address}
            </Typography>
            <Box mt={5} mb={5}>
              <LinearProgress variant="determinate" value={30} />
            </Box>

            <Collapse in={state}>
              <Box>
                <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                  <Typography variant={"caption"}>
                    <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                    Giá trị
                  </Typography>
                  <Typography variant={"caption"}>{formatCurrency(props.data.price)}</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                  <Typography variant={"caption"}>
                    <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                    Tổng cung
                  </Typography>
                  <Typography variant={"caption"}>{props.data.total_nft}</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                  <Typography variant={"caption"}>
                    <Icon src="/assets/imgs/invest/icons/dollar_cirle.svg" />
                    Chấp nhận
                  </Typography>
                  <Typography variant={"caption"}>USDT</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                  <Typography variant={"caption"}>
                    <Icon src="/assets/imgs/invest/icons/home.svg" />
                    Tài sản
                  </Typography>
                  <Typography variant={"caption"}>Bất động sản</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography variant={"caption"}>
                    <Icon src="/assets/imgs/invest/icons/sale.svg" />
                    Lợi nhuận cam kết
                  </Typography>
                  <Typography variant={"caption"}>10%</Typography>
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Link>
      <ImageContent>
        <ProjectStatus status={salePeriod} />
        <Button
          variant="contained"
          color={"secondary"}
          sx={(theme) => ({
            color: "#FF6C6C",
            width: 80,
            height: 40,
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          })}
          endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt="" />}
        >
          {props.data.profile.follows}
        </Button>
      </ImageContent>
      <CardActions sx={{ p: 0, pb: 1 }}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <IconButton onClick={() => setState(!state)} size={"small"}>
            {state ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
      </CardActions>
    </MuiCard>
  );
};
