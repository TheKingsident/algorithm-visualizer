"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { FaSpinner } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AlgorithmPicker({ selectedAlgorithm, onAlgorithmChange, disabled, sortingState }) {
  const [algorithm, setAlgorithm] = useState("bubble");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAlgorithmChange = (value) => {
    setAlgorithm(value);
    onAlgorithmChange(value);
  };

  const algorithmValue = (selectedAlgorithm) => {
    switch (selectedAlgorithm) {
      case "bubble":
        return "Bubble";
      case "selection":
        return "Selection";
      case "merge":
        return "Merge";
      case "quick":
        return "Quick";
      case "heap":
        return "Heap";
      case "insertion":
        return "Insertion";
      default:
        return "Select Algorithm";
    };
  };

  return (
    <DropdownMenu onOpenChange={(open) => setIsMenuOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button className="bg-indigo-400 text-white hover:bg-indigo-300" variant="outline" disabled={disabled}>
          {selectedAlgorithm ? `Algorithm: ${algorithmValue(selectedAlgorithm)}` : 'Select Algorithm'}
          {sortingState === "running"? (
            <FaSpinner className="animate-spin ml-2" />
          ) : isMenuOpen ? (
            <SlArrowUp className="ml-2" />
          ) : (
            <SlArrowDown className="ml-2" />
          )}
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-900 text-white border-gray-800">
        <DropdownMenuLabel>Select Algorithm</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuRadioGroup value={algorithm} onValueChange={handleAlgorithmChange}>
          <DropdownMenuRadioItem value="bubble">Bubble</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="selection">Selection</DropdownMenuRadioItem>
          {/*<DropdownMenuRadioItem value="merge">Merge</DropdownMenuRadioItem>*/}
          <DropdownMenuRadioItem value="quick">Quick</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="heap">Heap</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="insertion">Insertion</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlgorithmPicker;