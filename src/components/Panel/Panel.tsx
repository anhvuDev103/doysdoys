import { Row } from '@components/primitives';
import { Box, Paper, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  label: string | ReactNode;
  action?: ReactNode;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Panel: FC<Props> = ({ label, action, children, align = 'left' }) => {
  const alignComputed = () => {
    switch (align) {
      case 'center':
        return 'center';
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  };

  return (
    <Paper>
      <Row
        mb={4}
        sx={{
          justifyContent: alignComputed(),
        }}
      >
        <Typography variant='title1Bold'>{label}</Typography>
        {action && <Box ml='auto'>{action}</Box>}
      </Row>
      <Box>{children}</Box>
    </Paper>
  );
};

export default Panel;
