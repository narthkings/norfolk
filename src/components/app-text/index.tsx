import React from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

type VariantSizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'xs_sm'
  | 'xx_smallest'
  | 'x_small';
type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface Props extends Omit<TextProps, 'fontWeight'> {
  children: React.ReactNode;
  fontWeight?: 'normal' | 'medium' | 'bold';
  variant?: { [key in Breakpoints]?: VariantSizes } | VariantSizes;
}

const AppText = ({ variant, children, fontWeight, ...restProps }: Props) => {
  return (
    <ChakraText
      fontSize={variant}
      fontWeight={fontWeight || 'normal'}
      {...restProps}
    >
      {children}
    </ChakraText>
  );
};

export default AppText;
