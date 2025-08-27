import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Widget</h1>
        <p>{add(3,5)}</p>
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}
