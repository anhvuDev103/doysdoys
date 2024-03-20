import { SvgIcon, SvgIconProps } from '@mui/material';

const Icon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='0.5' y='0.5' width='23' height='23' rx='5.5' fill='none' />
      <rect x='0.5' y='0.5' width='23' height='23' rx='5.5' stroke='black' />
      <path
        d='M18.6666 7L9.49998 16.1667L5.33331 12'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
};

export default Icon;
