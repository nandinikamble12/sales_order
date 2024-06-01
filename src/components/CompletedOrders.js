import React from 'react';
import { Box, useQuery } from '@chakra-ui/react';

const fetchCompletedOrders = async () => {
  // Mock API call
  return [
    { id: 1, invoice_no: 'INV-456', customer: 'Sita', amount: 150 },
    // Add more completed orders here
  ];
};

const CompletedOrders = () => {
  // const { data: completedOrders, isLoading } = useQuery(['completedOrders'], fetchCompletedOrders);
  const { data, error, isLoading } =useQuery ({
    queryKey: 'completedOrders',
    queryFn:  fetchCompletedOrders,
    // options
  });
  console.log(data);
  console.log(error);
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  
  return (
    <Box>
      {data?.map(order => (
        <Box key={order.id} mb={2}>
          {order.invoice_no} - {order.customer} - ${order.amount}
        </Box>
      ))}
    </Box>
  );
};

export default CompletedOrders;
