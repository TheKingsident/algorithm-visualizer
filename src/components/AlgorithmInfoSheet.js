import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
  
function AlgorithmInfoSheet({ isOpen, onClose, algorithmDetails }) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-gray-900 text-indigo-400">
        <SheetHeader>
          <SheetTitle className="text-white text-left">{algorithmDetails ? algorithmDetails.name : "Algorithm Information"}</SheetTitle>
          <SheetDescription className="text-gray-400 text-left">
            {algorithmDetails ? algorithmDetails.description : "Select an algorithm to view details."}
              {algorithmDetails && (
                <div className="mt-4">
                  <p className="text-white"><strong>Time Complexity:</strong></p>
                  <p>Best: {algorithmDetails.complexity.best}</p>
                  <p>Average: {algorithmDetails.complexity.average}</p>
                  <p>Worst: {algorithmDetails.complexity.worst}</p>
                </div>
              )}
            </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default AlgorithmInfoSheet