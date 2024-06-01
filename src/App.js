import React from 'react';
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDarkMode } from './hook/useDarkMode';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import SaleOrderForm from './components/SaleOrderForm';
import SaleOrders from './components/SaleOrders';
import { useAuth } from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

const App = () => {
  const { colorMode, toggleColorMode } = useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={extendTheme({ config: { initialColorMode: colorMode } })}>
        <Router>
          <AuthProvider>
            <Box p={4}>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </Box>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default App;
