import { SvgIcon, SvgIconProps } from '@mui/material';

const Icon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.3334 4L6.00002 11.3333L2.66669 8'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </SvgIcon>
  );
};

export default Icon;
