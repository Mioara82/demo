"use client";
import StoreProvider from "./StoreProvider";
import MarketData from "./components/MarketData/MarketData";

export default function Home() {
  return (
    <StoreProvider>
      <MarketData />
    </StoreProvider>
  );
}
