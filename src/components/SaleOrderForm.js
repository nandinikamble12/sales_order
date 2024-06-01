import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, FormLabel, Input, VStack } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormLabel>Invoice No</FormLabel>
        <Controller
          name="invoice_no"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
        <FormLabel>Customer ID</FormLabel>
        <Controller
          name="customer_id"
          control={control}
          defaultValue=""
          render={({ field }) => <Input type="number" {...field} />}
        />
        <FormLabel>Items</FormLabel>
        <Controller
          name="items"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
        <FormLabel>Paid</FormLabel>
        <Controller
          name="paid"
          control={control}
          defaultValue={false}
          render={({ field }) => <Input type="checkbox" {...field} />}
        />
        <FormLabel>Invoice Date</FormLabel>
        <Controller
          name="invoice_date"
          control={control}
          render={({ field }) => <DatePicker {...field} selected={field.value} />}
        />
        <Button type="submit">Submit</Button>
      </VStack>
    </Box>
  );
};

export default SaleOrderForm;
