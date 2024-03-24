import { Row } from '@components/primitives';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, Paper, PaperProps, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props extends PaperProps {
  children: ReactNode;
  label: string;
  dismiss?: () => void;
}

const Modal = styled(Paper)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  width: '100%',
  maxWidth: 424,
  maxHeight: '80vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
}));

const Head = styled(Row)(({ theme }) => ({
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.common.black,
  padding: '16px 24px',
  ...theme.typography.title1Bold,
}));

const BasicModal = ({ label, children, dismiss, ...props }: Props) => {
  return (
    <Modal
      {...props}
      sx={{
        ...props.sx,
      }}
    >
      <Head>
        {label}
        <Button size='squared' variant='red' onClick={dismiss}>
          <CloseIcon />
        </Button>
      </Head>
      {children}
    </Modal>
  );
};

interface ActionProps {
  children: ReactNode;
}

const BasicModalAction: FC<ActionProps> = ({ children }) => {
  return (
    <Box
      sx={{
        px: 6,
        py: 4,
        borderTop: '1px solid',
        borderTopColor: 'common.black',
      }}
    >
      {children}
    </Box>
  );
};

interface BodyProps {
  children: ReactNode;
}

const BasicModalBody: FC<BodyProps> = ({ children }) => {
  return (
    <Box
      sx={{
        px: 6,
        py: 4,
        flex: 1,
        overflowY: 'auto',
        minHeight: 'min-content',
      }}
    >
      {children}
    </Box>
  );
};

BasicModal.Action = BasicModalAction;
BasicModal.Body = BasicModalBody;

export default BasicModal;
