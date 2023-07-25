import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { PrinceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PrinceHighlight variant="icome">
                  R$ 12.000,00
                </PrinceHighlight>
              </td>
              <td>Venda</td>
              <td>
                13/04/2022
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PrinceHighlight variant="outcome">
                  - R$ 59,00
                </PrinceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}