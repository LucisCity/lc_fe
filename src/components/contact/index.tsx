import React from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, FilledInput, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { headerHeight } from "../layout/header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { StartIcon } from "../layout/footer";

const ItemStack = styled(Paper, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: 300,
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
    color: theme.palette.text.secondary,
    borderRadius: 8,
    background: "transparent",
    ":hover": {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    },
    ...(active && {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    }),
  }),
);
export const ContactPage = () => {
  return (
    <Box paddingTop={`${headerHeight}px`} mt={10}>
      <Background
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={7}>
            <Typography mb={10} sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 700 }}>
              Liên hệ với chung tôi
            </Typography>
            <Typography mb={10} width={{ sm: 400, xs: "auto" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Box>
              <Stack spacing={2}>
                <ItemStack elevation={0} active>
                  <StartIcon src="/assets/imgs/footer/email.svg" alt="email icon" />
                  contact@luciscity.io
                </ItemStack>
                <ItemStack elevation={0}>
                  <StartIcon src="/assets/imgs/footer/phone.svg" alt="phone icon" />
                  (319) 555-0115
                </ItemStack>
                <ItemStack elevation={0}>
                  <StartIcon src="/assets/imgs/footer/headphone.svg" alt="headphone icon" />
                  (319) 555-0115
                </ItemStack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Box
              component={Paper}
              elevation={0}
              p={{ lg: 7, xs: 5 }}
              borderRadius={2}
              bgcolor={"rgba(255, 255, 255, 0.5)"}
              sx={{ backdropFilter: "blur(8px)" }}
            >
              <Box mb={2}>
                <Typography mb={1}>Tên</Typography>
                <FilledInput fullWidth />
              </Box>
              <Box mb={2}>
                <Typography mb={1}>Email</Typography>
                <FilledInput fullWidth />
              </Box>
              <Box mb={2}>
                <Typography mb={1}>Số điện thoại</Typography>
                <FilledInput fullWidth />
              </Box>
              <Box mb={2}>
                <Typography mb={1}>Câu hỏi của bạn là gì ?</Typography>
                <FilledInput fullWidth multiline rows={6} />
              </Box>
              <Button variant={"contained"} fullWidth sx={{ mt: 10 }}>
                Gửi
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
