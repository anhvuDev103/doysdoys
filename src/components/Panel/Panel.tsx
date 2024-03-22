import { Box, Paper, PaperProps, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props extends PaperProps {
  label: string | ReactNode;
  children: ReactNode;
  headless?: boolean;
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
  zIndex: 1,
}));

const Panel: FC<Props> = ({ label, children, headless, ...props }) => {
  return (
    <Paper
      {...props}
      sx={{
        position: 'relative',
        ...props.sx,
      }}
    >
      {!headless && (
        <Label>
          <Typography variant='body'>{label}</Typography>
        </Label>
      )}
      <Box>{children}</Box>
    </Paper>
  );
};

export default Panel;
