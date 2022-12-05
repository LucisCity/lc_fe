import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, styled } from "@mui/system";
import { headerHeight, HeaderNextLink, IPage, LogoImage, pages, ToggleDrawer } from ".";
import { Container, Grid, IconButton, Button } from "@mui/material";
import Link from "next/link";
import { Right } from "../../common/right";

const widthSidebar = 360;
const MenuListStyled = styled("div")(({ theme }) => ({
  width: widthSidebar,
  height: "100%",
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(9px)",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  borderTop: "1px solid #ffffff3b",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  width: widthSidebar,
  height: headerHeight,
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(9px)",
}));

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  listStyleType: "none",
  gap: theme.spacing(6),
  margin: 0,
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
  color: "#504C67",
}));

const MenuList = ({ activePage }: { activePage: IPage }) => (
  <MenuListStyled>
    <nav>
      <Ul>
        {pages.map((link) => (
          <li key={link.name}>
            <HeaderNextLink href={link.href} isSidebar activeCss={activePage.href === link.href}>
              {link.name}
            </HeaderNextLink>
          </li>
        ))}
        <li>
          <Button variant={"contained"} LinkComponent={Link} href={"/login"}>
            Login
          </Button>
        </li>
        <li>
          <IconButton>
            <img src="/assets/imgs/landing/global.svg" alt="i18n" />
          </IconButton>
        </li>
      </Ul>
    </nav>
  </MenuListStyled>
);

interface IProps {
  open: boolean;
  onClose: () => void;
  activePage: IPage;
}

export const SideBarMenu = (props: IProps) => {
  const open = props.open;

  return (
    <>
      <Drawer
        sx={(theme) => ({
          top: headerHeight,
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        })}
        PaperProps={{ sx: { background: "transparent", boxShadow: "none" } }}
        hideBackdrop
        anchor={"right"}
        open={open}
        onClose={() => props.onClose()}
      >
        <DrawerHeader>
          <Container sx={{ height: "100%" }}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={6}>
                <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"center"}>
                  <LogoImage src="/assets/imgs/logo/logo-L.svg" alt="logo-lucis" />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Right>
                  <ToggleDrawer onClick={() => props.onClose()}>
                    <img src="/assets/imgs/landing/close-icon.svg" alt="" />
                  </ToggleDrawer>
                </Right>
              </Grid>
            </Grid>
          </Container>
        </DrawerHeader>
        <MenuList activePage={props.activePage} />
      </Drawer>
    </>
  );
};
