import { Column, Row } from '@components/primitives';
import { Button, Input, InputProps, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends InputProps {
  label: string;
  account?: boolean;
}

const ParamInput: FC<Props> = ({ label, account, ...props }) => {
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
        {account && <Button variant='yellow'>My account</Button>}
      </Row>
    </Column>
  );
};

export default ParamInput;
