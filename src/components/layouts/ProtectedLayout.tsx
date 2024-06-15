import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import { Children } from '@/types';
import SideBar from './SideBar';
import Header from '../navbar/navbar';
import MobileNav from './MobileNav';

const ProtectedLayout = ({ children }: Children) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const {
    isOpen: isSideBarOpen,
    onOpen: isSideBarOnOpen,
    onClose: isSideBarOnClose
  } = useDisclosure();
  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav
  } = useDisclosure();

  return (
    // <Flex
    //   minH="100vh"
    //   pr={{ base: 'unset' }}
    //   bg={'brand.main'}
    // >
    //   <SideBar
    //     onClose={() => isSideBarOnClose()}
    //     isOpen={isSideBarOpen}
    //     onOpen={isSideBarOnOpen}
    //     display={{ base: 'none', lg: 'block' }}
    //     position={'fixed'}
    //     zIndex={'900'}
    //     h={'100vh'}
    //   />
    //   <Drawer
    //     autoFocus={false}
    //     isOpen={isOpenNav}
    //     placement="left"
    //     onClose={onCloseNav}
    //     returnFocusOnClose={false}
    //     onOverlayClick={onCloseNav}
    //     size="full"
    //   >
    //     <DrawerContent>
    //       <SideBar
    //         onClose={onCloseNav}
    //         isOpen={false}
    //         onOpen={isSideBarOnOpen}
    //       />
    //     </DrawerContent>
    //   </Drawer>
    //   <Flex
    //     flexDir="column"
    //     flex={'1'}
    //     position={'absolute'}
    //     right="0"
    //     left={{ base: '0', lg: '19rem' }}
    //     minH="100vh"
    //   >
    //     <Box>
    //       <Header />
    //     </Box>
    //     <Box p="4" flex={'1'} bg={'brand.main'}>
    //       {children}
    //     </Box>
    //   </Flex>
    // </Flex>
    <Box minH="100vh" bg={'#F9FAFB'} pr={{ base: 'unset' }}>
      <SideBar
        onClose={() => isSideBarOnClose()}
        isOpen={isSideBarOpen}
        onOpen={isSideBarOnOpen}
        display={{ base: 'none', lg: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpenNav}
        placement="left"
        onClose={onCloseNav}
        returnFocusOnClose={false}
        onOverlayClick={onCloseNav}
        size="full"
      >
        <DrawerContent>
          <SideBar onClose={onCloseNav} isOpen={false} onOpen={isSideBarOnOpen} />
        </DrawerContent>
      </Drawer>
      {!isMobile ? <></> : <MobileNav onOpen={onOpenNav} />}
      <Box>
        <Header />
      </Box>
      <Box bg={'#F9FAFB'} ml={{ base: 0, lg: 72 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
