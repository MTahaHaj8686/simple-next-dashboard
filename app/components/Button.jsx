"use client"
import React from 'react';
import { motion } from "motion/react";
import { useState } from "react";

function Button(props) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div>
            <motion.button onTap={() => setIsHovered(prev => !prev)}
                onHoverStart={() => { setIsHovered(true) }}
                onHoverEnd={() => { setIsHovered(false) }}
                className="bg-[#333] w-[100px] text-white py-[10px] rounded-full">
                <motion.span className="h-[25px] overflow-y-hidden block">
                    <motion.span className="block translate-y-0" animate={{ y: isHovered ? "-100%" : 0 }}>Hello</motion.span> <br />
                    <motion.span className="block translate-y-[0%]" animate={{ y: isHovered ? "-200%" : "0%" }}>World!</motion.span>
                </motion.span>
            </motion.button>
        </div>
    );
}


export default Button;