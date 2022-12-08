import PageLayout from "../components/layout/PageLayout";
import Error404 from "../components/error_page/400/error_404";
import {Box, Button, Typography} from "@mui/material";
import {
  RefreshOutlined, SignalCellularConnectedNoInternet1BarOutlined,
  SignalWifi1BarLockOutlined,
} from "@mui/icons-material";
import ErrorScreen from "../components/error_page/500/error_500";

export default function OfflinePage() {
  return (
    <PageLayout isShowHeader={true} isShowFooter={false}>
      <ErrorScreen errorTitle="Offline">
        <Typography fontFamily="monospace" align="center" variant="h1" color="white">
          <SignalCellularConnectedNoInternet1BarOutlined/>
          <SignalWifi1BarLockOutlined/>
          &nbsp;No Network
        </Typography>
        <Typography fontFamily="monospace" align="center" variant="body1" color="white">
          Please check your internet connection and reload the app
        </Typography>
        <Box justifyContent="center" display="flex" mt={0}>
          <Button variant="contained" onClick={() => window.location.href = "/"} startIcon={<RefreshOutlined/>}>
            Retry
          </Button>
        </Box>
      </ErrorScreen>
    </PageLayout>
  );}
