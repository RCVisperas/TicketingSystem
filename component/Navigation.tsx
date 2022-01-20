import React, { useState } from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import CreateCategory from "./CreateCategory";
import Paper from "@material-ui/core/Paper";
import TicketComponent from "./TicketComponent";
const Navigation = ({ tickets, settickets }) => {
  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography,
    padding: theme.spacing(0),
    margin: 16,
    textAlign: "center",
  }));
  const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 8px;
    margin-bottom: 16px;

    margin-right: 16px;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;
  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;
  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: ${blue[400]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      color: #fff;
      outline: none;
      background-color: ${blue[200]};
    }

    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  //category
  const [Cate, setCate] = useState([]);

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Create Ticket</Tab>
        <Tab>Create Category</Tab>
      </TabsList>
      <TabPanel value={0}>
        <div>
          <TicketComponent
            cate={Cate}
            ticketing={tickets}
            setticketing={settickets}
          />
        </div>
      </TabPanel>
      <TabPanel value={1}>
        <CreateCategory cate={Cate} setcate={setCate} />
      </TabPanel>
    </TabsUnstyled>
  );
};
export default Navigation;
