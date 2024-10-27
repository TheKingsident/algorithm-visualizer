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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{algorithmDetails ? algorithmDetails.name : "Algorithm Information"}</SheetTitle>
          <SheetDescription>
            {algorithmDetails ? algorithmDetails.description : "Select an algorithm to view details."}
              {algorithmDetails && (
                <div className="mt-4">
                  <p><strong>Time Complexity:</strong></p>
                  <p>Best: {algorithmDetails.complexity.best}</p>
                  <p>Average: {algorithmDetails.complexity.average}</p>
                  <p>Worst: {algorithmDetails.complexity.worst}</p>
                </div>
              )}
            </SheetDescription>
        </SheetHeader>
  
        {/* Add more information as needed */}
      </SheetContent>
    </Sheet>
  )
}

export default AlgorithmInfoSheet