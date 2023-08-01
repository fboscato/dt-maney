import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios";
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createAt: string;
}
interface CreateTransactionInput{
  description: string;
  price: number;
  category: string;
  type: 'income'| 'outcome';
}
interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionProvideProps {
  children: ReactNode;
}


export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvide({ children }: TransactionProvideProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string) {
    const response = await api.get('transactions',{
      params:{
        _sort:'createAt',
        _order: 'desc',
        q:query,
      }
    })
    setTransactions(response.data)
  }
  async function createTransaction(data:CreateTransactionInput){
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createAt: new Date(),
    })
    setTransactions(state=>[response.data,...state])
  }
  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransaction,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}