import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { princeFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
 const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <samp>Entrada</samp>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{princeFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <samp>Saídas</samp>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{princeFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <samp>Total</samp>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>{princeFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}