/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import * as React from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";

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
    <Box sx={{ width: "100%", marginLeft: "300px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          textColor='inherit'
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
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
                  fontSize: value === 0 ? "24px" : "20px",
                  fontWeight: value === 0 ? "bold" : "normal",
                }}
              >
                찜한 클럽
              </span>
            }
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...a11yProps(0)}
            sx={{ width: "50%", maxWidth: "none" }}
          />
          <Tab
            label={
              <span
                style={{
                  color: value === 1 ? "#FFC300" : "rgba(0, 0, 0, 0.6)",
                  fontSize: value === 1 ? "24px" : "20px",
                  fontWeight: value === 1 ? "bold" : "normal",
                }}
              >
                신청한 클럽
              </span>
            } // eslint-disable-next-line react/jsx-props-no-spreading
            {...a11yProps(0)}
            sx={{ width: "50%", maxWidth: "none" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <div>아직 내가 찜한 클럽이 없어요!</div>
          <div>
            내 취향에 맞는 클럽에 찜하고, 다른 클러비들과 가까워져 보세요!
          </div>
          <div>
            <Button>다양한 클럽 둘러보기</Button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <div>아직 내가 신청한 클럽이 없어요!</div>
          <div>
            내 취향에 맞는 클럽에 가입하고, 다른 클러비들과 가까워져 보세요!
          </div>
          <div>
            <Button>다양한 클럽 둘러보기</Button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
