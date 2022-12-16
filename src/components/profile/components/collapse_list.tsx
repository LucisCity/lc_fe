import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SvgIcon from "../../common/svg_icon";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";


const iconSrc = "/assets/imgs/icon/";
const tabs = [
  {
    name: "Dashboard",
    href: "/profile",
    svgSrc: iconSrc + 'dashboard.svg',
  },
  {
    name: "Tài khoản",
    href: "/profile/account",
    svgSrc: iconSrc + 'user_account.svg',
  },
  {
    name: "Sản phẩm đầu tư",
    href: "/profile/investment",
    svgSrc: iconSrc + 'investment.svg',
  },
  {
    name: "Referral",
    href: "/profile/referral",
    svgSrc: iconSrc + 'referral.svg',
  },
  {
    name: "Thông báo",
    href: "/profile/notification",
    svgSrc: iconSrc + 'notification.svg',
  },
  {
    name: "Ứng dụng",
    href: "/profile/app",
    svgSrc: iconSrc + 'notification.svg',
  },
]

interface ListItemProps {
  children: any;
  name: string;
  href: string;
  svgSrc: string;
}

const ListItem = (props: ListItemProps) => {
  const {children, name, href, svgSrc} = props;

  const [open, setOpen] = React.useState(!!children);
  const router = useRouter();
  // console.log(`href ${href}`);

  const handleClick = () => {
    console.log(`clicked href ${href}`);
    const activeTab = router.query.tab ? `/profile/${router.query.tab}` : "/profile";
    console.log(`activeTab ${activeTab}`);
    if (activeTab !== href) {
      router.push(href, undefined, {shallow: true});
    } else {
      setOpen(!open);
    }
  }

  return (
    <React.Fragment>
      <ListItemButton
        onClick={handleClick}
      >
        <ListItemIcon>
          <SvgIcon src={svgSrc}/>
        </ListItemIcon>
        <Typography
          fontSize={16} fontWeight={500}
        >
          {name}
        </Typography>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

interface CollapseMenuProps {
  activeTab: string;
  children: any;
}

export default function CollapseMenu(props: CollapseMenuProps) {
  const {activeTab, children} = props;

  // console.log(`active tab ${activeTab}`);
  return (
    <>
      <List
        sx={(theme) => ({
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        })}
      >
        {tabs.map((i) => (
          <ListItem
            key={i.href}
            name={i.name}
            href={i.href}
            svgSrc={i.svgSrc}
          >
            {activeTab === i.href ? children : null}
          </ListItem>
        ))}
      </List>
    </>
  );
}