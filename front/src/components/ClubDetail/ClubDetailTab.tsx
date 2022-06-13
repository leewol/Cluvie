import * as React from "react";
import { Tabs, Tab, Box, Rating } from "@mui/material";
// import styled from "@emotion/styled";
import ClubReview from "@/components/ClubDetail/ClubReview/ClubReview";
import ClubReviewButton from "@/components/ClubDetail//ClubReviewButton/ClubReviewButton";

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor='inherit'
          value={value}
          onChange={handleChange}
          sx={{ width: "100%", paddingTop: "50px" }}
          TabIndicatorProps={{
            style: { background: "#FFC300" },
          }}
          aria-label='basic tabs example'
        >
          <Tab
            label={
              <span
                style={{
                  color: value === 0 ? "#FFC300" : "rgba(0, 0, 0, 0.6)",
                  fontSize: value === 0 ? "20px" : "16px",
                }}
              >
                기본 정보
              </span>
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...a11yProps(0)}
            sx={{ width: "33.33%", maxWidth: "none" }}
          />
          <Tab
            label={
              <span
                style={{
                  color: value === 1 ? "#FFC300" : "rgba(0, 0, 0, 0.6)",
                  fontSize: value === 1 ? "20px" : "16px",
                }}
              >
                상세 정보
              </span>
            } // eslint-disable-next-line react/jsx-props-no-spreading
            {...a11yProps(0)}
            sx={{ width: "33.33%", maxWidth: "none" }}
          />
          <Tab
            label={
              <span
                style={{
                  color: value === 2 ? "#FFC300" : "rgba(0, 0, 0, 0.6)",
                  fontSize: value === 2 ? "20px" : "16px",
                }}
              >
                참여 후기
              </span>
            } // eslint-disable-next-line react/jsx-props-no-spreading
            {...a11yProps(0)}
            sx={{ width: "33.33%", maxWidth: "none" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        기본 정보
      </TabPanel>
      <TabPanel value={value} index={1}>
        상세 정보
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            margin: "30px 0 50px 0",
            padding: "46px",
            background: "rgba(0, 0, 0, 0.03)",
            textAlign: "center",
          }}
        >
          <Rating defaultValue={2.5} precision={0.5} readOnly />
          <div style={{ fontSize: "36px" }}>2.5</div>
          <div style={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.6)" }}>
            (총 5개의 후기)
          </div>
        </div>
        <ClubReviewButton />
        <ClubReview />
        <ClubReview />
        <ClubReview />
        <ClubReview />
        <ClubReview />
      </TabPanel>
    </Box>
  );
}
