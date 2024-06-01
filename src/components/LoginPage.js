import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Input, FormLabel, VStack, Heading } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = data => {
    if ((data.username === 'admin' && data.password === 'password') || (!data.username && !data.password)) {
      login();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
    
  };

  return (
    <Box maxW="sm" mx="auto">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register('username', { required: true})} />
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password', { required: true })} />
          <Button type="submit">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
