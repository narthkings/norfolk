import React from 'react';
import { Box, Flex, Select } from '@chakra-ui/react';
import Image from 'next/image';
import ProfileImage from '../../assets/icons/profile-icon.svg';
// import NotificationImage from '../../assets/icons/notification-icon.svg';

const Header = () => {
  return (
    <Box bg="white" pb="2rem" pt="1rem">
      <Flex justify="end" gap="4" alignItems="center">
        {/* <Image src={NotificationImage} alt="logo" width="40" height="40" /> */}
        {/* <Image src={ProfileImage} alt="logo" width="40" height="40" /> */}
        <Select
          width="3rem"
          variant={'unstyled'}
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
