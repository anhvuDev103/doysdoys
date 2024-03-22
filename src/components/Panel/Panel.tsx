import { Row } from '@components/primitives';
import { Box, Paper, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  label: string | ReactNode;
  action?: ReactNode;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Label = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 50,
  padding: '4px 10px',
  boxShadow: `${theme.palette.common.black} 1px 1px 0 0`,
  border: '1px solid',
  borderColor: theme.palette.common.black,
  position: 'absolute',
  rotate: '-16.05deg',
  left: -12,
  top: -10,
}));

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
    <Paper
      sx={{
        position: 'relative',
      }}
    >
      <Label>
        <Typography variant='body'>{label}</Typography>
      </Label>
      {action && (
        <Row
          sx={{
            justifyContent: alignComputed(),
          }}
        >
          <Box ml='auto'>{action}</Box>
        </Row>
      )}
      <Box>{children}</Box>
    </Paper>
  );
};

export default Panel;
