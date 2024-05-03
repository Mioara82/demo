"use client";

import {FiSun, FiMoon} from "react-icons/fi";
import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import Image from "next/image";
import React from "react";

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme();
    return(
        <div>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <FiMoon/> : <FiSun/>}
            </button>
        </div>
    );
};

export default ThemeSwitch;