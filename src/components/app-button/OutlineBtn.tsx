import { ButtonProps, Button } from '@chakra-ui/react';
import React from 'react';
import AppText from '../app-text';

interface BtnProps extends ButtonProps {
  onClick: () => void;
  label: string;
  color?: string;
  colorScheme?: string;
}
const OutlineBtn = ({
  onClick,
  label,
  color,
  colorScheme,
  ...restProps
}: BtnProps) => {
  return (
    <Button
      color={'grey'}
      colorScheme={colorScheme ?? 'primary'}
      variant="outline"
      onClick={onClick}
      _hover={{ background: 'none' }}
      {...restProps}
    >
      <AppText fontWeight={'medium'} variant={'xs'}>
        {label}
      </AppText>
    </Button>
  );
};

export default OutlineBtn;
