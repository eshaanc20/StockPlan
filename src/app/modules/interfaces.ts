export interface StockInformationFormat {
    symbol: string;
    current: number;
    open: number;
    high: number;
    low: number;
    previousClosePrice: number;
    change: string;
    percentChange: string;
    amountChange: number;
    high52Week: number;
    low52Week: number;
    marketCap: number;
    eps: number;
    dividendYield: number;
    profitEarningRatio: number;
  }