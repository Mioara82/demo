"use client";
import React,{ useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { fetchMarketData } from "../../../lib/features/todos/marketSlice";
import { RootState } from "@/lib/store";

const MarketData = () => {

  const dispatch = useAppDispatch();
  const marketData = useAppSelector((state:RootState) => state.market.data);
  const loadingStatus = useAppSelector((state:RootState) => state.market.loading);
  const error = useAppSelector((state:RootState) => state.market.error);

  useEffect(() => {
    dispatch(fetchMarketData());
  },[dispatch]);

  if(!marketData){
    return <div>Loading data...</div>;
  }

  const coinData = marketData.data.active_cryptocurrencies;

  return (
    <div>
      {loadingStatus === "pending" && <p>Loading...</p>};
      {loadingStatus === "fulfilled" && (
        <div>
          <p>{coinData}</p>
        </div>
      )}
      {loadingStatus === "rejected" && <p>Error: {error}</p>}
    </div>
  );
};

export default MarketData;
