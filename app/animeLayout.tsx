"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter : "blur(200px)" }}
        animate={{ opacity: 1, filter : "blur(0)" }}
        exit={{ opacity: 0, filter : "blur(150px)" }}
        transition={{ duration: 0.4 , ease : "easeInOut"}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}