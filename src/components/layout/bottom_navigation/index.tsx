import * as React from "react";
import BottomNavigationMui from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import zIndex from "@mui/material/styles/zIndex";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import {isChrome, isChromium, isIOS, isMobile, isMobileSafari, isTablet} from "react-device-detect";
import {isClient, isStandaloneMode} from "../../../utils/env";

const IconNav = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
}));
function AppNavAction(props: any) {
  const { label, icon, to, ...others } = props;
  return <BottomNavigationAction component={Link} href={to} label={label} icon={icon} {...others} />;
}

function BottomNavigationUI() {
  // console.log('{BottomNavigationUI} render: ');
  const router = useRouter();
  const [tabIdx, setTabIdx] = React.useState(-1);

  const setTabIdxMemo = useCallback(
    (i: number) => {
      if (i !== tabIdx) {
        setTabIdx(i);
      }
    },
    [tabIdx],
  );

  useEffect(() => {
    let initialTabIdx: number;
    switch (router.pathname) {
      case "/invest":
        initialTabIdx = 0;
        break;
      case "/member":
        initialTabIdx = 1;
        break;
      case "/news":
        initialTabIdx = 2;
        break;
      case "/profile":
        initialTabIdx = 3;
        break;
      default:
        initialTabIdx = -1;
    }

    setTabIdxMemo(initialTabIdx);
  }, [router.pathname, setTabIdxMemo]);

  return (
    <BottomNavigationMui
      showLabels
      value={tabIdx}
      onChange={(event, newValue) => {
        setTabIdxMemo(newValue);
      }}
      sx={{ height: getHeight() }}
    >
      <AppNavAction label="Đầu tư" to="/invest" icon={<IconNav src={"/assets/imgs/bottom_navbar/status-up.svg"} />} />
      <AppNavAction label="Thành viên" to="/member" icon={<IconNav src={"/assets/imgs/bottom_navbar/cards.svg"} />} />
      <AppNavAction label="Tin tức" to="/news" icon={<IconNav src={"/assets/imgs/bottom_navbar/book.svg"} />} />
      <AppNavAction
        label="Cá nhân"
        to="/profile"
        icon={<IconNav src={"/assets/imgs/bottom_navbar/user-square.svg"} />}
      />
    </BottomNavigationMui>
  );
}

export function deviceSupport(): boolean {
  return isClient ? isMobile || isTablet : false;
}

export function getHeight() {
  // On ios device, we need to avoid ios home indicator at the bottom of screen
  let coveredByIosIndicator = false;
  if (isIOS) {
    if (isChrome || isChromium) {
      coveredByIosIndicator = true;
    }

    // NOTE: This will raise hydration error because server state is differ from client initial state
    // So we need to use this on NoSSR only
    else if (isClient && isStandaloneMode) {
      coveredByIosIndicator = true;
    }
  }

  return 60 + (coveredByIosIndicator ? 6 : 0);
}

export default function BottomNavigation() {
  return (
    <Box width={"100%"} position={"fixed"} bottom={0} zIndex={zIndex.appBar}>
      <BottomNavigationUI />
    </Box>
  );
}
