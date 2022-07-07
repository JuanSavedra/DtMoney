import Modal from 'react-modal';
import { Header } from "./components /Header";
import { Dashboard } from './components /Dashboard/index';
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components /NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsOpenNewTransactionModal(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}