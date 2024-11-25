import { Button } from '@renderer/components/ui/button'
import { ModeToggle } from '@renderer/components/mode-toggle'
import { toast } from 'sonner'

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Button onClick={() => toast.success('Hello world')}>Click here</Button>
      <ModeToggle />
    </div>
  )
}

export default App
