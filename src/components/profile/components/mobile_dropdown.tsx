import React from "react";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SvgIcon from "../../common/svg_icon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavBarTab, TABS } from "./navbar";

interface MobileDropDownProps {
  activeSection: string | null;
}

export const MobileDropDown = (props: MobileDropDownProps) => {
  const defaultDropdownValue = React.useMemo(
    () => TABS.find((i) => i.href === props.activeSection) ?? TABS[0],
    [props.activeSection],
  );
  const [showMobileDropdown, setShowMobileDropdown] = React.useState<boolean>(false);
  const handleShowMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  return (
    <Stack
      direction="column"
      spacing={{ sm: 2, xs: 3 }}
      mx={{ sm: 2, xs: "5%" }}
      mt={{ sm: 0, xs: 3 }}
      sx={{ height: "100%" }}
      justifyContent={"space-between"}
    >
      {/*<ClickAwayListener onClickAway={() => setShowMobileDropdown(false)}>*/}
      <Button
        sx={{
          textTransform: "none",
          height: 56,
          display: "flex",
          justifyContent: "space-between",
          width: { sm: "auto" },
          background: "#6555EE",
          color: "#ffffff",
          borderRadius: 2,
          ":hover": {
            background: "#6555EE",
          },
        }}
        onClick={handleShowMobileDropdown}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            ml: { md: 4, sm: 2, xs: 5 },
          }}
        >
          <SvgIcon src={defaultDropdownValue.svgSrc} />
          <Typography fontSize={16} fontWeight={500} ml={{ md: 7, sm: 4, xs: 10 }}>
            {defaultDropdownValue.name}
          </Typography>
        </Box>
        {showMobileDropdown ? <ExpandLess /> : <ExpandMore />}
      </Button>
      {/*</ClickAwayListener>*/}
      {showMobileDropdown ? (
        <Stack direction="column" spacing={{ sm: 2, xs: 3 }}>
          {TABS.map((i) => (
            <NavBarTab
              key={i.name}
              href={i.href}
              name={i.name}
              svgSrc={i.svgSrc}
              active={i.href === props.activeSection}
              onClick={() => setShowMobileDropdown(false)}
            />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
};
