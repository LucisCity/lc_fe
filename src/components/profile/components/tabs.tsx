import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan"/>}}
    scrollButtons="auto"
    variant="scrollable"
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiTabs-indicatorSpan': {
    // maxWidth: 50,
    width: '100%',
    backgroundColor: '#504C67',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({theme}) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 16,
  marginRight: theme.spacing(1),
  color: '#9A9A9A',
  '&.Mui-selected': {
    color: '#504C67',
  },
  // '&.Mui-focusVisible': {
  //   backgroundColor: 'rgba(100, 95, 228, 0.32)',
  // },
  // "&:hover": {
  //   // textDecoration: "none",
  //   "&:before": {
  //     width: "100%",
  //     transition: (theme.transitions as any).create(["width"]),
  //   },
  // },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pl={{lg: 2}} pt={5} px={0}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ProfileSubTabsProps {
  children: any;
  labels: string[];
}

export default function ProfileSubTabs(props: ProfileSubTabsProps) {
  const {children, labels} = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}} my={{xs: 5}}>
      <Box
        sx={{
          color: '#9A9A9A',
          borderBottom: 1,
          borderBottomColor: '#D9D9D9'
        }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {labels.map((label) => (
            <StyledTab key={label} label={label} {...a11yProps(labels.indexOf(label))}/>
          ))}
        </StyledTabs>
      </Box>
      {React.Children.map(children, (child: any, index: number) => (
        <TabPanel key={index} index={index} value={value}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
}