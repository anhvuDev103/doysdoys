import { Column, Row } from '@components/primitives';
import { BoxProps, Select, SelectProps, Typography } from '@mui/material';
import { FC } from 'react';

export type BasicSelectProps = {
  label?: string;
  errorText?: string | null;
  containerProps?: BoxProps;
  align?: 'left' | 'right';
} & SelectProps;

const BasicSelect: FC<BasicSelectProps> = ({
  label,
  errorText,
  children,
  containerProps,
  align,
  MenuProps,
  ...props
}) => {
  return (
    <Column {...containerProps}>
      <Row>
        <Typography mb={1}>{label}</Typography>
        {errorText && (
          <Typography variant='body' color='common.red'>
            {errorText}
          </Typography>
        )}
      </Row>
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: align || 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: align || 'left',
          },
          ...MenuProps,
        }}
        {...props}
      >
        {children}
      </Select>
    </Column>
  );
};

export default BasicSelect;
