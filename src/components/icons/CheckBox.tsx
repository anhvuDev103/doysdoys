import { Box, BoxProps } from '@mui/material';

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
        boxShadow: 1,
        backgroundColor: 'common.white',
        ...props.sx,
      }}
    />
  );
};

export default Icon;
