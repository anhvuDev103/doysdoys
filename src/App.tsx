import AppGlobalStyles from '@contexts/AppGlobalStyles';
import Doydoy from '@pages/Doydoy';
import ModalProvider from '@providers/Modal';
import Web3Provider from '@providers/Web3Provider';

function App() {
  return (
    <AppGlobalStyles>
      <Web3Provider>
        <ModalProvider>
          <Doydoy />
        </ModalProvider>
      </Web3Provider>
    </AppGlobalStyles>
  );
}

export default App;
