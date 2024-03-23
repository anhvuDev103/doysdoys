import { Box, PaperProps, styled } from '@mui/material';
import {
  cloneElement,
  createContext,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export type PushModalType = (content: ReactElement) => void;
export type RemoveModalType = (content: ReactElement) => void;

interface ContextModalValue {
  push: PushModalType;
  remove: RemoveModalType;
}

const ModalContainer = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
}));

const ModalBackdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundColor: theme.palette.common.black60,
}));

export const ModalContext = createContext<ContextModalValue | null>(null);

const ModalProvider: FC<Props> = ({ children }) => {
  const [modals, setModals] = useState<ReactElement[]>([]);

  const push = (content: ReactElement) =>
    setModals((prev) => [...prev, content]);

  const remove = (content: ReactElement) =>
    setModals((prev) =>
      prev.filter((_content) => !Object.is(_content, content)),
    );

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modals.length]);

  return (
    <ModalContext.Provider
      value={{
        push,
        remove,
      }}
    >
      {children}
      {modals.length > 0 &&
        createPortal(
          <ModalContainer>
            {modals.map((content, i) => {
              if (isValidElement(content))
                return (
                  <Fragment key={i}>
                    <ModalBackdrop
                      onClick={() => remove(content)}
                      sx={{
                        zIndex: i + 100,
                      }}
                    />
                    {cloneElement(content as ReactElement, {
                      dismiss: () => remove(content),
                      ...(content.props as PaperProps),
                      sx: {
                        zIndex: i + 101,
                        ...(content.props as PaperProps).sx,
                      },
                    })}
                  </Fragment>
                );
            })}
          </ModalContainer>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
