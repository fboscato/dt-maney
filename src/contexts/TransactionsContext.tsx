import { ReactNode, createContext, useEffect, useState } from "react"
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionProvidePropos {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvide({ children }: TransactionProvidePropos) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string) {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q',query)
    }
    const response = await fetch(url)
    const data = await response.json();

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransaction()
  })

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}