"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AlgorithmPicker() {
  const [algorithm, setAlgorithm] = useState("bubble")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Algorithm</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Algorithm</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={algorithm} onValueChange={setAlgorithm}>
          <DropdownMenuRadioItem value="bubble">Bubble</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="selection">Selection</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="merge">Merge</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="quick">Quick</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="heap">Heap</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="insertion">Insertion</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlgorithmPicker;