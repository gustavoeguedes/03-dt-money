import { createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome'
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: { children: React.ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
        async function fetchTransactions(query?: string) {
            const url = new URL('http://localhost:3333/transactions')
            
            if (query) {
                url.searchParams.append('q', query)
            }
            console.log(url.toString())
            const response = await fetch(url)
            const data = await response.json()
            setTransactions(data)
            console.log(data)
        }
    
        useEffect(() => {
            fetchTransactions()
            
        }, [])
    return (
        <TransactionsContext.Provider value={{ transactions,fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}