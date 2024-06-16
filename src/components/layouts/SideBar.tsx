import React, { ReactNode } from 'react';
import NextLink from 'next/link'
import { Avatar, Box, Flex, FlexProps, Icon, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SidebarProps } from '@/types';
import Home from '@/assets/icons/home.svg';
import Customer from '@/assets/icons/customer-nav-icon.svg';
import Group from '@/assets/icons/people.svg';
import Appointment from '@/assets/icons/appointment.svg';
import Help from '@/assets/icons/headPhone.svg';
import Cog from '@/assets/icons/cog.svg';
import Dots from '@/assets/icons/dots';
import Switch from '@/assets/icons/switch.svg';
import SignOut from '@/assets/icons/signOut.svg';
import { SuccessToast } from '@/utils/toast';
import Logo from '@/assets/image/retro.png'
import { HamburgerIcon, ViewIcon } from '@chakra-ui/icons';
import { getSessionStorageData } from '@/utils/getColor';

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
    sessionStorage.removeItem('profileData');
    router.push('/');
    SuccessToast('Logout Successful!');
  };

  let info = getSessionStorageData('profileData')
  const LinkItems = [
    {
      href: '#',
      icon: Home,
      alt: 'providers icon',
      tabName: 'Home'
    },

    {
      href: '/customers',
      icon: Customer,
      alt: 'customer icon',
      tabName: 'Customers'
    },
    {
      href: '/group',
      icon: Group,
      alt: 'payers icon',
      tabName: 'Groups'
    },
    {
      href: '#',
      icon: Appointment,
      alt: 'payers icon',
      tabName: 'Appointment'
    },
  ];

  const BottomLinkItems = [
    {
      href: '/settings',
      icon: Cog,
      alt: 'Settings',
      tabName: 'Settings'
    },
    {
      href: '#',
      icon: Help,
      alt: 'Help Center',
      tabName: 'Help Center'
    },
  ]

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
            const isActive = router.pathname.startsWith(link.href);
            return (
              <NavItem
                _hover={{ background: '#FEEEE8', color: '#B03D12' }}
                // className={isActive ? 'activeLink' : ''}
                color={isActive ? '#B03D12' : '#484d59'}
                key={link.tabName}
                icon={link.icon}
                to={link.href}
                bg={isActive ? '#FEEEE8' : ''}
              >
                {link.tabName}
              </NavItem>
            )
          })}
        </Box>
        {/* <Flex flexDir="column" alignItems="center" gap="1rem">
          {LinkItems.map((item, index) => (
            <SidebarLink
              key={index}
              href={item.href}
              icon={item.icon}
              alt={item.alt}
              tabName={item.tabName}
            />
          ))}
        </Flex> */}
        <Box>
          <Box>
            {BottomLinkItems.map((link) => {
              const isActive = router.pathname.startsWith(link.href);
              return (
                <NavItem
                  _hover={{ background: '#FEEEE8', color: '#B03D12' }}
                  // className={isActive ? 'activeLink' : ''}
                  color={isActive ? '#B03D12' : '#484d59'}
                  key={link.tabName}
                  icon={link.icon}
                  to={link.href}
                  bg={isActive ? '#FEEEE8' : ''}
                >
                  {link.tabName}
                </NavItem>
              )
            })}
          </Box>
          <Box px={'4'}>
            <hr style={{ marginTop: '1rem', marginBottom: '1.5rem', height: '1px' }} />
          </Box>

          <Flex alignItems={'center'} gap={'3rem'}>
            <Stack direction={'row'} gap={3} px={'1rem'}>
              <Avatar size={'sm'} bg="primary.base.50" src='https://bit.ly/ryan-florence' />
              <Box>
                <Text fontSize={'.9rem'} fontWeight={'600'}>
                  {info?.data?.fullName ?? ''}
                </Text>
                <Text fontSize={'.9rem'}>{info?.data?.role ?? ''}</Text>
              </Box>

            </Stack>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Dots />}
                variant="outline"
                fontSize='10px'
              />

              <Portal>

                <MenuList>
                  <MenuItem onClick={handleLogout}>
                    <Flex width={'100%'} alignItems={'center'} justify={'space-between'}>
                      <div>
                        Switch Profiles
                      </div>
                      <Image
                        src={Switch}
                        alt={'icon'}
                        height={20}
                        width={20}
                      />
                    </Flex>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Flex width={'100%'} alignItems={'center'} justify={'space-between'}>
                      <div>
                        Sign out
                      </div>
                      <Image
                        src={SignOut}
                        alt={'icon'}
                        height={20}
                        width={20}
                      />
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>

          </Flex>
        </Box>
      </Flex >
    </Box >
  )
};

export default SideBar;
const NavItem: React.FC<NavItemProps> = ({ icon, children, to, color, ...rest }) => {
  return (
    <Link _hover={{ textDecoration: 'none' }} as={NextLink} href={to}>
      <Flex
        rounded={'lg'}
        align="center"
        my="2"
        py="2"
        pl={'2'}
        mx="4"
        role="group"
        cursor="pointer"
        {...rest}
        gap={2}
      >

        <Image
          src={icon}
          alt={'icon'}
          height={20}
          width={20}
        />
        {children}
      </Flex>
    </Link>
  )
}