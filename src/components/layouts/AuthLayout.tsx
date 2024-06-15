import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Children } from '@/types';

const AuthLayout = ({ children }: Children) => {
  return (
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      {children}
    </Flex>
  );
};

export default AuthLayout;
