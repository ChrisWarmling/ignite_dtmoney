import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsItens {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string,
}

type TransactionsInput = Omit<TransactionsItens, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: TransactionsItens[];
  createTransaction: (transaction : TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  
  const [transactions, setTransactions] = useState<TransactionsItens[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionsInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const transaction = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}