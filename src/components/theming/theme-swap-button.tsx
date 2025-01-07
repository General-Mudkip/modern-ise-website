"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const swapTheme = (theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>) => {
  if (theme == "dark") {
    setTheme(() => "light")
  } else if (theme == "light") {
    setTheme(() => "dark")
  }
}

export function ThemeSwapButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button suppressHydrationWarning variant="outline" size="icon" onClick={() => swapTheme(theme ?? "", setTheme)}>
      {
        theme == "dark" ?
          (<Moon />) : (<Sun />)
      }
    </Button>
  );
}
