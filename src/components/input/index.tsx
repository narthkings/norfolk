import {
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  InputProps,
  InputLeftAddon,
  FormHelperText,
  FormControl,
} from '@chakra-ui/react';
import React from 'react';

interface Props extends Omit<InputProps, 'placeholder'> {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  label?: string;
  placeholder?: string;
  leftAddon?: React.ReactNode;
  errorMessage?: string;
  register?: never;
}

const InputField = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      errorMessage,
      leftElement,
      rightElement,
      label,
      placeholder,
      leftAddon,
      ...restProps
    },
    ref
  ) => {
    return (
      <FormControl my="2">
        {label && (
          <FormLabel fontSize={'16px'} color={'gray.700'} fontWeight={'400'}>
            {label}
          </FormLabel>
        )}
        <InputGroup alignItems={'center'}>
          {leftAddon && (
            <InputLeftAddon
              pointerEvents="none"
              top="auto"
              bgColor={'#F5F8FA'}
              height={'48px'}
              fontSize="1rem"
            >
              {leftAddon}
            </InputLeftAddon>
          )}

          {leftElement && (
            <InputLeftElement pointerEvents="none" top="auto">
              {leftElement}
            </InputLeftElement>
          )}

          <Input
            borderRadius={'6px'}
            borderColor={'#E1E7EC'}
            borderWidth={'1px'}
            color={'gray.700'}
            fontSize={'16px'}
            height={'48px'}
            outline={'none'}
            placeholder={placeholder}
            _placeholder={{ color: '#CED6DE' }}
            focusBorderColor="#CED6DE"
            {...restProps}
            ref={ref}
          />
          {rightElement && (
            <InputRightElement fontSize={'1rem'} top="auto" mr={'.9rem'}>
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>

        {errorMessage && (
          <FormHelperText fontSize="1rem" color="red">
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

InputField.displayName = 'InputField'
export default InputField;
