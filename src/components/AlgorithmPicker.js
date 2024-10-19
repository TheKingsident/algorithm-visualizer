"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Algorithm</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Algorithm</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="bubble">Bubble</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="selection">Selection</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="merge">Merge</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="quick">Quick</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="heap">Heap</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="insertion">Insertion</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
