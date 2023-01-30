import React from "react";
import { Box } from "@mui/system";
import { CardSection } from "../landing/card_section";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ScrollPage from "../layout/scroll_page";
import { ExpandMore } from "@mui/icons-material";

export const Faq = () => {
  return (
    <ScrollPage pt={5}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
          background: `url("/assets/imgs/background/6.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Container>
        <Box display={"flex"} justifyContent={"center"} mb={2}>
          <img src="/assets/imgs/logo/logo-3d-vertical.svg" alt="" height={200} />
        </Box>
        <Accordion TransitionProps={{ unmountOnExit: true }} elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Cách cài đặt ứng dụng Lucis City?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Đọc hướng dẫn cài đặt ứng dụng Lucis City tại đây: https://news.luciscity.io/huong-dan-cai-ung-dung-lucis-city-tren-mobile-va-pc/
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Làm sao để có thể sở hữu thẻ galaxy platinum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
            <Typography>Đâu tư NFT lãi bao nhiêu phần trăm?</Typography>
          </AccordionSummary>
        </Accordion>
      </Container>
    </ScrollPage>
  );
};
