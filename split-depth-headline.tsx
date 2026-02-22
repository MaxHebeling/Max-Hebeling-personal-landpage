"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface SplitDepthHeadlineProps {
  text: string
  separator?: string
  className?: string
  style?: React.CSSProperties
}

export function SplitDepthHeadline({
  text,
  separator = "\u00b7",
  className = "",
  style = {},
}: SplitDepthHeadlineProps) {
  const parts = text.split(separator).map((s) => s.trim())
  const blockA = parts[0] || ""
  const blockB = parts[1] || ""

  // false = normal order (A · B), true = swapped (B · A)
  const [swapped, setSwapped] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      startCycle()
    }, 4000)

    function startCycle() {
      // Fade out
      setVisible(false)
      // After fade out, swap and fade in
      setTimeout(() => {
        setSwapped((prev) => !prev)
        setVisible(true)
        // Hold for 4.5s, then repeat
        setTimeout(() => startCycle(), 4500)
      }, 1200)
    }

    return () => clearTimeout(initialDelay)
  }, [])

  const left = swapped ? blockB : blockA
  const right = swapped ? blockA : blockB

  return (
    <motion.h1
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={`${left}-${right}`}
            className="flex items-center gap-2"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span style={{ color: "#222222" }}>{left}</span>
            <span style={{ color: "#C6A85A" }}>{separator}</span>
            <span style={{ color: "#222222" }}>{right}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.h1>
  )
}
