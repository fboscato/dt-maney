import { MagnifyingGlass } from "phosphor-react";
import { SearchFromContainer } from "./styles";

export function SearchForm (){
  return(
    <SearchFromContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFromContainer>
  )
}