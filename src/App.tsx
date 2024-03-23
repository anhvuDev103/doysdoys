import AppGlobalStyles from '@contexts/AppGlobalStyles';
import Doydoy from '@pages/Doydoy';
import ModalProvider from '@providers/Modal';

function App() {
  return (
    <AppGlobalStyles>
      <ModalProvider>
        <Doydoy />
      </ModalProvider>
    </AppGlobalStyles>
  );
}

export default App;
