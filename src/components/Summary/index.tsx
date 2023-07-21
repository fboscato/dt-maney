import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <samp>Entrada</samp>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
          <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <samp>Saídas</samp>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
          <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <samp>Total</samp>
          <CurrencyDollar size={32} color="#ffff"/>
        </header>
          <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}