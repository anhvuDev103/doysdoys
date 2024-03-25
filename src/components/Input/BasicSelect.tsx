import { Column, Row } from '@components/primitives';
import { BoxProps, Select, SelectProps, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  label: string;
  errorText?: string | null;
  containerProps?: BoxProps;
  align?: 'left' | 'right';
} & SelectProps;

const BasicInput: FC<Props> = ({
  label,
  errorText,
  children,
  containerProps,
  align,
  ...props
}) => {
  const getAlignProps = (): SelectProps => {
    return {
      MenuProps: {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: align || 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: align || 'left',
        },
      },
    };
  };

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
      <Select {...getAlignProps()} {...props}>
        {children}
      </Select>
    </Column>
  );
};

export default BasicInput;
