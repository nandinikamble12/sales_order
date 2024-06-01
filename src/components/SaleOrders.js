import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchSaleOrders = async () => {
  // Mock API call
  return [
    { id: 1, invoice_no: 'INV-123', customer: 'Ram', amount: 120 },
    // Add more sale orders here
  ];
};

const SaleOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const queryClient = useQueryClient();
  // const { data: saleOrders, isLoading } = useQuery(['saleOrders'], fetchSaleOrders);

  // const createSaleOrder = useMutation(newOrder => {
  //   // Mock API call
  //   return newOrder;
  // }, {
  //   mutationFn: addTodo,
  //   onSuccess: () => {
  //     // queryClient.invalidateQueries(['saleOrders']);
  //     onClose();
  //   }
  // });
  const mutation = useMutation({
    mutationFn:()=>{},
    onSuccess: () => {
      onClose();
    },
  })

  const onSubmit = async data => {
    mutation.mutate(data);
  };

  // if (isLoading) {
  //   return <Box>Loading...</Box>;
  // }
  const saleOrders= [];

  return (
    <Box>
      <Button onClick={onOpen}>+ Sale Order</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm onSubmit={onSubmit} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box mt={4}>
        {saleOrders.map(order => (
          <Box key={order.id} mb={2}>
            {order.invoice_no} - {order.customer} - ${order.amount}
            <Button onClick={onOpen} ml={4}>Edit</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SaleOrders;
