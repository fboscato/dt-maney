import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PrinceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dataFormatter, princeFormatter } from "../../utils/formatter";


export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PrinceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && "- "}
                      {princeFormatter.format(transaction.price)}
                    </PrinceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dataFormatter.format(new Date(transaction.createAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}