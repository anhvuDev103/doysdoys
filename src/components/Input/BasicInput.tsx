import { Column, Row } from '@components/primitives';
import { BoxProps, Input, InputProps, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends InputProps {
  label?: string;
  errorText?: string | null;
  containerProps?: BoxProps;
}

const BasicInput: FC<Props> = ({
  label,
  errorText,
  containerProps,
  ...props
}) => {
  return (
    <Column {...containerProps}>
      <Row>
        {label && <Typography mb={1}>{label}</Typography>}
        {errorText && (
          <Typography variant='body' color='common.red'>
            {errorText}
          </Typography>
        )}
      </Row>
      <Input
        sx={{
          flex: 1,
        }}
        {...props}
      />
    </Column>
  );
};

export default BasicInput;
