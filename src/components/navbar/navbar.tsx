import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import ProfileImage from '../../assets/icons/profile-icon.svg';

import InputField from '../input';
const Header = () => {
  return (
    <Box bg="white" pb="2rem" p="4">
      <Flex justify="start" mr={'2rem'} gap="4" alignItems="center">


        <InputField
          width={'50%'}
          placeholder="Search"
        />

      </Flex>
    </Box>
  );
};

export default Header;
