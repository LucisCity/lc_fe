import {Box, Button, Card, CardContent, Switch, Typography} from "@mui/material";
import {CloudDownloadOutlined} from "@mui/icons-material";
import {appVersionCommitId} from "../../utils/env";
import PwaVersionHelper from "../../utils/pwa_version_helper";
import React, {useEffect, useState} from "react";
import DayNightSwitch from "../common/day_night_switch";

export default function AppSetting() {
  const [latestVersion, setLatestVersion] = useState(appVersionCommitId);
  const [isLight, setIsLight] = useState(true);
  useEffect(() => {
    PwaVersionHelper.getInstance().fetchVersionId().then((latest) => {
      setLatestVersion(latest)
    });
  }, [setLatestVersion])

  const hasNewVersion = latestVersion !== appVersionCommitId

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
        <Card sx={{mt: 6, pt: 2}} elevation={0}>
          <CardContent>
            <Typography variant={"h4"}>
              App update
            </Typography>
            <Box my={3}>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Typography>Automatic update</Typography>
                <Switch
                  edge="end"
                  disabled={true}
                  checked={true}
                  inputProps={{
                    'aria-labelledby': 'switch-list-label-bluetooth',
                  }}
                />
              </Box>

              <Typography>Build version: {appVersionCommitId}</Typography>
              <Typography>Latest version: {latestVersion}</Typography>
              <Box mt={4} sx={{textAlign: "center"}}>
                {hasNewVersion && <Button
                  variant="contained" size="small" startIcon={<CloudDownloadOutlined />}
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

            </Box>
          </CardContent>
        </Card>

        <Card sx={{mt:6, pt: 2}} elevation={0}>
          <CardContent>
            <Typography variant={"h4"}>
              UI Theme
            </Typography>
            <Box my={3}>
              <Box
                display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems="center"
                height={60}
              >
                <Typography>Light</Typography>
                <Box sx={{
                  transform: "scale(0.5)",
                  transformOrigin: "center center",
                }}>
                  <DayNightSwitch toggled={isLight} onClick={() => setIsLight(!isLight)} />
                </Box>
                <Typography>Dark</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
