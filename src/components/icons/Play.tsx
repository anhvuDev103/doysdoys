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
      <path
        d='M5 3L19 12L5 21V3Z'
        fill='white'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
};

export default Icon;
