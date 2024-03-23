import { Box, BoxProps } from '@mui/material';

import CheckIcon from './Check';

const Icon = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        width: 16,
        height: 16,
        border: '1px solid',
        borderColor: 'common.black',
        borderRadius: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'common.green',
        padding: '2px',
        boxShadow: 1,
        ...props.sx,
      }}
    >
      <CheckIcon
        sx={{
          width: '12px',
          height: '12px',
        }}
      />
    </Box>
  );
};

export default Icon;
