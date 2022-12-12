import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, CardActions, Chip } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import moment from "moment";

interface IProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  createdDate?: string;
  link?: string;
  categories?: Array<string>;
}
export const Card = (props: IProps) => {
  return (
    <MuiCard sx={{ borderRadius: 4, background: "rgba(255, 255, 255, 0.5)", height: "100%" }} elevation={0}>
      <Link target="_blank" href={props?.link ?? `/news`}>
        <CardActionArea sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" }}>
          <CardMedia
            sx={{ borderRadius: 4 }}
            component="img"
            height="290"
            image={props?.imageUrl ?? ""}
            alt="lucis city post"
          />
          <CardContent sx={{ pl: 3, pr: 3, pt: 4, pb: 4, flex: 1 }}>
            <Box display={"flex"} flexDirection="column" justifyContent={"space-between"} height={"100%"}>
              <Box>
                <Box mb={3}>
                  {props?.categories?.map((category, index) => (
                    <Chip
                      key={category + index}
                      sx={{
                        background: "rgba(101, 85, 238, 0.2)",
                        mr: 1,
                        mb: 1,
                      }}
                      color="primary"
                      label={
                        <Typography
                          textTransform={"uppercase"}
                          color="rgba(101, 85, 238, 1)"
                          variant={"caption"}
                          fontWeight={500}
                          letterSpacing={1.5}
                        >
                          {category}
                        </Typography>
                      }
                    />
                  ))}
                </Box>
                <Typography variant="caption" component={"p"} mt={2} mb={3}>
                  {moment(new Date(props?.createdDate ?? "")).format("h:mm a Do, MMM,  YYYY")}
                </Typography>
                <Typography variant="h3" mb={3}>
                  {props?.title}
                </Typography>
                <Typography>{props?.description}</Typography>
              </Box>
              <Box display={"flex"} mt={3}>
                <Avatar
                  sx={{ mr: 3 }}
                  alt="Admin"
                  src="https://secure.gravatar.com/avatar/50e39012884b28809e59503c53349426?s=96&d=mm&r=g"
                >
                  A
                </Avatar>
                <Box>
                  <Typography variant="h4">Admin</Typography>
                  <Typography variant="caption" component={"p"}>
                    Marketing Coordinator
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </MuiCard>
  );
};
