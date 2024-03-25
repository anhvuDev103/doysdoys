import { Column, Row } from '@components/primitives';
import { Select, SelectProps, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  label: string;
  errorText?: string | null;
} & SelectProps;

const BasicInput: FC<Props> = ({ label, errorText, children, ...props }) => {
  return (
    <Column>
      <Row>
        <Typography mb={1}>{label}</Typography>
        {errorText && (
          <Typography variant='body' color='common.red'>
            {errorText}
          </Typography>
        )}
      </Row>
      <Select {...props}>{children}</Select>
    </Column>
  );
};

export default BasicInput;
