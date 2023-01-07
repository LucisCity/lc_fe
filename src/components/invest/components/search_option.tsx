import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";
import { ProjectGql } from "../../../gql/graphql";
import { slugify } from "../../../utils/string.util";
import { formatCurrency } from "../../../utils/number.util";

interface IProps {
  data: ProjectGql;
}
export const SearchOption = (props: IProps) => {
  return (
    <MuiCard sx={{ background: "transparent", width: "100%" }} elevation={0}>
      <Link href={`/invest/${slugify(props.data.title)}.${props.data.id}`}>
        <CardContent sx={{ px: { sm: 4, xs: 1 }, py: 0, ":last-child": { pb: 0 } }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={3}>
            <Box display={"flex"}>
              <img src={props.data.thumbnail} alt={props.data.title} height={45} width={45} />
              <Box ml={4}>
                <Typography color={"#000"} variant={"h5"}>
                  {props.data.title}
                </Typography>
                <Typography variant="caption" color="#D9D9D9" component={"p"}>
                  {props.data.address}
                </Typography>
              </Box>
            </Box>
            <Typography color="#D9D9D9">{formatCurrency(props.data.price)}</Typography>
          </Box>
        </CardContent>
      </Link>
    </MuiCard>
  );
};
