import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsModal } from './components/TransactionsModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseTransactionsModal() {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header openModal={handleOpenNewTransactionsModal} />
      <TransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseTransactionsModal}
        />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
