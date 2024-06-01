import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useDarkMode } from '../hook/useDarkMode';
import SaleOrders from './SaleOrders';
import CompletedOrders from './CompletedOrders';


const Dashboard = () => {
  const { logout } = useAuth();
  const { toggleColorMode } = useDarkMode();

  return (
    <Box>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
