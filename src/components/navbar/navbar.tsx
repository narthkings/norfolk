import React from 'react';
import { Box, Flex, Select, Icon, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import ProfileImage from '../../assets/icons/profile-icon.svg';
// import NotificationImage from '../../assets/icons/notification-icon.svg';
import Logout from '@/assets/icons/logout'
import { useRouter } from 'next/navigation';
const Header = () => {
  const router = useRouter()
  return (
    <Box bg="white" pb="2rem" pt="1rem">
      <Flex justify="end" mr={'2rem'} gap="4" alignItems="center">
        {/* <Image src={NotificationImage} alt="logo" width="40" height="40" /> */}
        {/* <Image src={ProfileImage} alt="logo" width="40" height="40" /> */}
        {/* <Select
          width="3rem"
          variant={'unstyled'}
          _hover={{ cursor: 'pointer' }}
        /> */}
        <Icon onClick={() => {
          sessionStorage.clear()
          router.push('/')
        }} as={Logout} w={8} h={8} />
      </Flex>
    </Box>
  );
};

export default Header;
