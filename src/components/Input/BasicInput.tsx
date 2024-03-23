import { Column, Row } from '@components/primitives';
import { Input, InputProps, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends InputProps {
  label: string;
}

const BasicInput: FC<Props> = ({ label, ...props }) => {
  return (
    <Column>
      <Typography mb={1}>{label}</Typography>
      <Row
        sx={{
          alignItems: 'stretch',
          gap: 2,
        }}
      >
        <Input
          sx={{
            flex: 1,
          }}
          {...props}
        />
      </Row>
    </Column>
  );
};

export default BasicInput;
