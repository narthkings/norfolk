import React, { ReactNode } from 'react';
import NextLink from 'next/link'
import { Avatar, Box, Flex, FlexProps, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import AppButton from '../app-button';
import { Children, SidebarProps } from '@/types';
import { SidebarLink } from '@/components/sidebar-link';
import Home from '@/assets/icons/home.svg';
import Customer from '@/assets/icons/customer-nav-icon.svg';
import Group from '@/assets/icons/people.svg';
import Appointment from '@/assets/icons/appointment.svg';
import { SuccessToast } from '@/utils/toast';
import Logo from '@/assets/image/retro.png'

interface NavItemProps extends FlexProps {
  icon?: any
  children: ReactNode
  to: string
  color: string
}
const SideBar = ({ onClose, onOpen, isOpen, ...rest }: SidebarProps) => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('admin');
    router.push('/');
    SuccessToast('Logout Successful!');
  };

  const LinkItems = [
    // {
    //   href: '/dashboard',
    //   icon: Home,
    //   alt: 'providers icon',
    //   tabName: 'Home'
    // },

    {
      href: '/customers',
      icon: Customer,
      alt: 'customer icon',
      tabName: 'Customers'
    },
    {
      href: '/groups',
      icon: Group,
      alt: 'payers icon',
      tabName: 'Groups'
    },
    {
      href: '/settings',
      icon: Appointment,
      alt: 'Settings',
      tabName: 'Settings'
    }
  ];

  // return (
  //   <Box borderRadius={'1rem'} bg={'brand.white'} p="1rem" {...rest}>
  //     <Flex justifyContent="space-between" flexDir="column" h="100%">
  //       <Flex gap="5rem" flexDir="column">
  //         <Flex pl=".5rem" mt="3rem">
  //           <Link>
  //             <Image src={'/src/assets/image/retro.png'} alt="logo" height={100} width={120} />
  //           </Link>
  //         </Flex>
  //         <Flex flexDir="column" alignItems="center" gap="1rem">
  //           {data.map((item, index) => (
  //             <SidebarLink
  //               key={index}
  //               href={item.href}
  //               icon={item.icon}
  //               alt={item.alt}
  //               tabName={item.tabName}
  //             />
  //           ))}
  //         </Flex>
  //       </Flex>

  //       <Flex
  //         justifyContent="center"
  //         background={'typography.green'}
  //         borderRadius="1.2rem"
  //         mb="3rem"
  //         w="95%"
  //         px=".4rem"
  //         py=".3rem"
  //         alignItems="left"
  //         transition="all 0.2s"
  //         _hover={{ cursor: 'pointer' }}
  //       >
  //         {/* <AppButton variant="primary" onClick={handleLogout}>
  //           <Image
  //             src={LogoutIcon}
  //             alt="logout icon"
  //             className="ml-[-3rem]"
  //             height={25}
  //             width={25}
  //           />
  //           <Text ml="4" fontWeight="medium" fontSize={16}>
  //             Logout
  //           </Text>
  //         </AppButton> */}
  //       </Flex>
  //     </Flex>
  //   </Box>
  // );
  return (
    <Box
      overflowY={'auto'}
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 72 }}
      pos="fixed"
      h="100vh"
      {...rest}
    >
      <Flex h="20" mb={'3rem'} alignItems="center" mx="5" justifyContent="space-between">
        <Image src={Logo} alt="logo" height={100} width={120} />
        {/* <CloseButton display={{ base: 'flex', lg: 'none' }} onClick={onClose} /> */}
      </Flex>
      <Flex height={'80%'} direction={'column'} justifyContent={'space-between'}>
        <Box>
          {LinkItems.map((link) => {
            // let resolved = useResolvedPath(link.href)
            // let match = useMatch({ path: resolved.pathname, end: true })

            return (
              <NavItem
                _hover={{ background: '#FEEEE8', color: '#B03D12', }}
                className={router.pathname === link.href ? 'activeLink' : ''}
                color={router.pathname === link.href ? '#f85619' : '#484d59'}
                key={link.tabName}
                // icon={link.icon}
                to={link.href}
              >
                {link.tabName}
              </NavItem>
            )
          })}
        </Box>
        <Box>
          <Box px={'4'}>
            <hr style={{ marginTop: '1rem', marginBottom: '1.5rem', height: '1px' }} />
          </Box>

          <Flex alignItems={'start'} justifyContent={'space-evenly'}>
            <Avatar bg="primary.base.50" src='https://bit.ly/ryan-florence' />
            <Box onClick={() => router.push('/profile')} cursor={'pointer'}>
              <Text fontSize={'.9rem'} fontWeight={'600'}>
                {'jon doe'}
              </Text>
              <Text fontSize={'.9rem'}>{'Receptionist'}</Text>
            </Box>
            {/* <LogoutIcon style={{ cursor: 'pointer' }} onClick={handleLogout} /> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
};

export default SideBar;
const NavItem: React.FC<NavItemProps> = ({ icon, children, to, color, ...rest }) => {
  return (
    <Link as={NextLink} href={to}>
      <Flex
        rounded={'lg'}
        align="center"
        py="2"
        pl={'2'}
        mx="4"
        role="group"
        cursor="pointer"
        {...rest}
      >
        {/* {icon && ( */}
        <Icon
          stroke={color}
          color={color}
          mr="4"
          fontSize="16"
          as={icon}
          _groupHover={{
            color: 'red',
            stroke: '#f85619',
          }}
        />
        {/* )} */}
        {children}
      </Flex>
    </Link>
  )
}