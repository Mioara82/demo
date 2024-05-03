"use client";
import StoreProvider from "./providers/StoreProvider";
import MarketData from "./components/MarketData/MarketData";

export default function Home() {
  return (
    <StoreProvider>
      <MarketData />
    </StoreProvider>
  );
}
