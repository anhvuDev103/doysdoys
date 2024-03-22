import { SvgIcon, SvgIconProps } from '@mui/material';

const Icon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.3 5.5332C16.3487 6.58219 17.0627 7.91857 17.3519 9.37336C17.6411 10.8282 17.4924 12.336 16.9247 13.7063C16.357 15.0766 15.3957 16.2478 14.1624 17.0718C12.9291 17.8958 11.4791 18.3356 9.99585 18.3356C8.5126 18.3356 7.06265 17.8958 5.82933 17.0718C4.59602 16.2478 3.63472 15.0766 3.06699 13.7063C2.49926 12.336 2.35059 10.8282 2.63978 9.37336C2.92897 7.91857 3.64304 6.58219 4.69169 5.5332'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
      <path
        d='M10 1.6665V9.99984'
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
