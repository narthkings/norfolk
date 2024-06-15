import React from 'react';
import Select, {
  components,
  SingleValueProps,
  OptionProps,
  DropdownIndicatorProps,
  GroupBase,
  PropsValue,
} from 'react-select';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import type { MultiValue, SingleValue } from 'react-select';

export interface SelectProps {
  value: string;
  label: string;
  svgIcon?: string;
  fullText?: string;
}
interface SelectComponentProps {
  register?: UseFormRegister<FieldValues>;
  placeholder?: string;
  value?: PropsValue<SelectProps>;
  name?: string;
  errors?: unknown;
  label?: string;
  onChange: (
    newValue: MultiValue<SelectProps> | SingleValue<SelectProps>
  ) => void;
  options?: SelectProps[];
  defaultValue?: PropsValue<SelectProps>;
  errorMessage?: string;
  isSearchable?: boolean;
}

const Option: React.FC<
  OptionProps<SelectProps, false, GroupBase<SelectProps>>
> = (props) => (
  <components.Option {...props} className="asset-option">
    {props.data?.svgIcon && (
      <img src={props.data.svgIcon} alt="logo" className="option-logo" />
    )}
    <span className="mr-2">{props.label}</span>
    <span className="text-[#B8C4CE]">{props.data?.fullText}</span>
  </components.Option>
);

const AppSelect = React.forwardRef<any, SelectComponentProps>(
  (
    {
      name,
      register,
      value,
      label,
      placeholder,
      options,
      onChange,
      defaultValue,
      errorMessage,
      isSearchable,
    },
    ref
  ) => {
    return (
      <FormControl>
        {label && (
          <FormLabel fontSize={'16px'} color={'gray.700'} fontWeight={'400'}>
            {label}
          </FormLabel>
        )}

        <Select
          {...register}
          isMulti={false}
          defaultValue={defaultValue}
          isSearchable={isSearchable}
          name={name}
          className="react-select-input"
          value={value}
          closeMenuOnSelect={true}
          placeholder={placeholder}
          options={options}
          onChange={onChange}
          ref={ref}
          styles={{
            singleValue: (base) => ({
              ...base,
              display: 'flex',
              alignItems: 'center',
            }),
            control: (provided: any, state: any) => ({
              ...provided,
              borderColor: state.isFocused
                ? '#E1E7EC !important'
                : '#E1E7EC !important',
              boxShadow: 'none',
              borderRadius: '0.5rem',
              height: '48px',
              fontWeight: '400',
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: '1em',
              color: 'black',
              fontWeight: 400,
              display: 'flex',
              boxShadow: 'none',
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: '#4DAA77',
              primary25: '#4daa7738',
            },
          })}
          components={{
            Option,
          }}
        />
        {errorMessage && (
          <FormHelperText fontSize="1rem" color="red">
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);
AppSelect.displayName = 'AppSelect';
export default AppSelect;
