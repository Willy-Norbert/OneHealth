'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {cn} from "@/lib/utils";


const ScrollToTop: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }

      useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Scroll to top button */}
            <motion.button
                onClick={scrollToTop}
                className={cn(
                    "fixed bottom-8 right-8 z-50 p-2 rounded-full bg-emerald-500 text-emerald-950 shadow-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
                    showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-4 w-4" />
            </motion.button>

        </>
    );
};

export default ScrollToTop;