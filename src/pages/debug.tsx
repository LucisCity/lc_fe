/* eslint-disable */
import React, {useState} from "react";
import type {NextPage} from "next";
import {
  Container,
  IconButton,
  NoSsr,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import {appEnv, appVersionCommitId} from "../utils/env";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Background } from "../components/landing/components/background";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ScrollPage from "../components/layout/scroll_page";
import {SyncOutlined} from "@mui/icons-material";
import PwaVersionHelper from "../utils/pwa_version_helper";

const DebugPage: NextPage = () => {
  const [errorComponentVisible, setErrorComponentVisible] = useState(false);

  const makeAppCrash = () => {
    setErrorComponentVisible(true);
  }

  return (
    <>
      <DocHead />
      <PageLayout>
        <NoSsr>
          <ScrollPage>
            <Background
              style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: -1,
              }}
            />
            <Container>
              <Typography mb={10} variant={"h2"} sx={{ fontSize: { xs: 28, sm: 32 } }}>
                Debug Page
              </Typography>

              <Grid container>
                <Grid item xs={12} sm={3} md={5}>
                  <Box p={3} display={"flex"} flexDirection={"column"} height={"100%"}>
                    {/*<Typography mb={10} variant={"body2"} width={{ sm: 400, xs: "auto" }}>*/}
                    {/*  Chúng tôi ở đây và sẵn sàng hỗ trợ bạn.*/}
                    {/*</Typography>*/}
                    <h2>Error debug</h2>
                    <div>
                      <Button variant="contained" onClick={makeAppCrash}>Test 500 Error</Button>
                      {errorComponentVisible && <DebugErrorComponent />}
                    </div>
                    <Box flex={1} display={"flex"} alignItems={"flex-end"} mt={3} mb={3}>
                      <Box>
                        <Stack spacing={2} direction={"row"}>
                          <IconButton sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}>
                            <img src="/assets/imgs/contact/ic_facebook.svg" alt="icon facebook" />
                          </IconButton>
                          <IconButton sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}>
                            <img src="/assets/imgs/contact/ic_discord.svg" alt="icon discord" />
                          </IconButton>
                          <IconButton sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}>
                            <img src="/assets/imgs/contact/ic_telegram.svg" alt="icon telegram" />
                          </IconButton>
                          <IconButton sx={{ background: "rgba(255, 255, 255, 0.5)", p: 3 }}>
                            <img src="/assets/imgs/contact/ic_twitter.svg" alt="icon twitter" />
                          </IconButton>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={9} md={7}>

                  <AppInfo/>

                </Grid>
              </Grid>
            </Container>
          </ScrollPage>
        </NoSsr>
      </PageLayout>
    </>
  );
};

function AppInfo() {
  return (
    <Box
      component={Paper}
      elevation={0}
      p={{ lg: 7, xs: 5 }}
      borderRadius={2}
      bgcolor={"rgba(255, 255, 255, 0.5)"}
      sx={{ backdropFilter: "blur(8px)" }}
    >
      <Typography variant={"h5"}>App Info</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Key</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover={true}>
            <TableCell align="right">Build Version</TableCell>
            <TableCell align="left">
              {appVersionCommitId}
              <Button
                variant="contained" color="info" size="small" startIcon={<SyncOutlined/>}
                sx={{marginLeft: 10}}
                onClick={() => PwaVersionHelper.getInstance().ensureNewestVersion((from, to) => {
                  alert(`New version Updated: ${from} => ${to}`);
                }, (e) => {
                  alert(`Cannot update: ${e.message}`);
                })}
              >Force Update</Button>
            </TableCell>
          </TableRow>
          <TableRow hover={true}>
            <TableCell align="right">APP_ENV</TableCell>
            <TableCell align="left">{appEnv}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}

function DebugErrorComponent() {
  throw new Error("Force cause error");

  return (
    <h1>Crash</h1>
  );
}

export default DebugPage;

const ItemStack = styled(Paper, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: 300,
    display: "flex",
    alignItems: "center",
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
