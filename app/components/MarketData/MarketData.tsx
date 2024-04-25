"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketData } from "../../../lib/features/todos/marketSlice";
import Image from "next/image";
import CoinImg from "./Users/mioaracenusa/Downloads/flash-circle.png";

function MarketData() {

    return (
        <div>
          <div>
            <Image src={CoinImg} alt="coin symbol" />
            <h5 className="">Coins</h5>
          </div>
        </div>
    );
}

export default MarketData;
