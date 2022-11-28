import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import { ButtonLogin, headerHeight, HeaderNextLink, ToggleDrawer } from "./landing_header";
import { Container, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import { Right } from "../../common/right";
import { Left } from "../../common/left";

const widthSidebar = 390;
const MenuListStyled = styled("div")(({ theme }) => ({
  width: widthSidebar,
  height: "100%",
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(9px)",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  borderTop: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(90deg, #FFFFFF 0.56%, rgba(255, 255, 255, 0) 100%)",
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

const MenuList = () => (
  <MenuListStyled>
    <nav>
      <Ul>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Home{" "}
          </HeaderNextLink>
        </li>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Member{" "}
          </HeaderNextLink>
        </li>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Invest{" "}
          </HeaderNextLink>
        </li>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Marketplace{" "}
          </HeaderNextLink>
        </li>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Blog{" "}
          </HeaderNextLink>
        </li>
        <li>
          <HeaderNextLink href="/" isSidebar>
            {" "}
            Contact{" "}
          </HeaderNextLink>
        </li>
        <li>
          <ButtonLogin LinkComponent={Link} href={"/login"}>
            Login
          </ButtonLogin>
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
                <Left>Logo</Left>
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
        <MenuList />
      </Drawer>
    </>
  );
};
