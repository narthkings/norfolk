import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import AppText from '../app-text';

interface BtnProps extends ButtonProps {
  onClick?: () => void;
  label: string;
}
const PrimaryBtn = ({ label, onClick, ...restProps }: BtnProps) => {
  return (
    <Button
      color={'#fff'}
      bg="#e24e17"
      variant="solid"
      _focus={{ borderColor: 'none' }}
      _focusVisible={{ borderColor: 'none' }}
      onClick={onClick}
      _hover={{ background: 'primary' }}
      {...restProps}
    >
      <AppText fontWeight={'medium'} variant={'xs'}>
        {label}
      </AppText>
    </Button>
  );
};

export default PrimaryBtn;
