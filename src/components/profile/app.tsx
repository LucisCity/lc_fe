import { Box, Button, Card, CardContent, Switch, Typography } from "@mui/material";
import { CloudDownloadOutlined, ReportGmailerrorredOutlined } from "@mui/icons-material";
import { appVersionCommitId } from "../../utils/env";
import PwaVersionHelper from "../../utils/pwa_version_helper";
import React, { useEffect, useState } from "react";
import DayNightSwitch from "../common/day_night_switch";

export default function AppSetting() {
  return (
    <Box mx={{sm: 10, xs: 3}} my={7}>
      <Typography
        fontWeight={700}
        fontSize={{sm: 32, xs: 25}}
        textAlign={{sm: "left", xs: "center"}}
      >
        Application
      </Typography>

      <Box my={10}>

        <SettingItem title="Version">
          <SettingUpdate/>
        </SettingItem>

        <SettingItem title="UI Theme">
          <SettingTheme/>
        </SettingItem>

      </Box>
    </Box>
  )
}

function SettingItem(props: { title: string, children: React.ReactNode }) {
  return (
    <Card sx={{mt: 6, pt: 2, boxShadow: '0px 0 1px 0px #e6e6e6'}} elevation={0}>
      <CardContent>
        <Typography variant={"h4"}>
          {props.title}
        </Typography>
        <Box my={3}>
          {props.children}
        </Box>
      </CardContent>
    </Card>
  )
}

function SettingUpdate() {
  const [latestVersion, setLatestVersion] = useState(appVersionCommitId);
  useEffect(() => {
    PwaVersionHelper.getInstance().fetchVersionId().then((latest) => {
      setLatestVersion(latest)
    });
  }, [setLatestVersion])

  const hasNewVersion = latestVersion !== appVersionCommitId

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
        <Typography>Automatic update</Typography>
        <Switch
          edge="end"
          disabled={true}
          checked={true}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
          }}
          sx={{cursor: "not-allowed"}}
        />
      </Box>

      <table>
        <tr>
          <td><Typography>Build version: </Typography></td>
          <td><Typography><b style={{color: "green"}}>{appVersionCommitId}</b></Typography></td>
        </tr>
        {hasNewVersion && <tr>
          <td><Typography>Latest version: </Typography></td>
          <td><Typography><b style={{color: "#6555EE"}}>{latestVersion}</b></Typography></td>
        </tr>}
      </table>

      <Box mt={4} sx={{textAlign: "center"}}>
        {hasNewVersion && <Button
          variant="contained" size="small" startIcon={<CloudDownloadOutlined/>}
          onClick={() => PwaVersionHelper.getInstance().ensureNewestVersion((from, to) => {
            alert(`New version Updated: ${from} => ${to}`);
          }, (e) => {
            alert(`Cannot update: ${e.message}`);
          })}
        >Download and install</Button>}
      </Box>

      {!hasNewVersion && <Typography mt={3} variant={"caption"}>
        You&apos;ve already at the latest version
      </Typography>}
    </>
  )
}

function SettingTheme() {
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <Box
        display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems="center"
        height={60}
      >
        <Typography>Light</Typography>
        <Box sx={{
          transform: "scale(0.5)",
          transformOrigin: "center center",
        }}>
          <DayNightSwitch dark={!isLight} onClick={() => setIsLight(!isLight)}/>
        </Box>
        <Typography>Dark</Typography>
      </Box>
      {!isLight && <Typography mt={3} variant={"caption"} display="flex" alignItems={"center"}>
        <ReportGmailerrorredOutlined sx={{mr: 2}}/>
        Dark is experimental theme and has not been well tested yet, forgive us if you see any bug crawling in the UI.
      </Typography>}
    </>
  )
}
