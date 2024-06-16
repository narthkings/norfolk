import { Flex, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import ActiveIcon from 'src/assets/icons/providers-nav-icon.svg';
import Image from 'next/image';

interface SidebarLinkProps {
  href: string;
  icon: any;
  tabName: string;
  alt: string;
  h?: any;
  w?: any;
}

export const SidebarLink = ({
  href,
  icon,
  tabName,
  alt,
  h,
  w
}: SidebarLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname.startsWith(href);

  return (
    <Flex
      w="95%"
      alignItems="left"
      bg={isActive ? 'typography.green' : ''}
      borderRadius="1.3rem"
      transition="all 0.2s"
      px=".8rem"
      py=".9rem"
      _hover={{ cursor: 'pointer' }}
    >
      <Link
        href={href}
        display="flex"
        alignItems="center"
        as={NextLink}
        _hover={{ textDecoration: 'none' }}
      >
        <Image
          src={isActive ? icon : ''}
          alt={alt}
          height={isActive ? 25 : h}
          width={isActive ? 25 : w}
          style={{ marginLeft: isActive ? '' : '-.8rem' }}
        />
        <Text
          ml="4"
          fontWeight="medium"
          color={isActive ? 'typography.white' : 'typography.gray'}
        >
          {tabName}
        </Text>
      </Link>
    </Flex>
  );
};
