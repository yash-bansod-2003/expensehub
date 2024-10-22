import { Button } from '@renderer/components/ui/button'
function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen w-screem">
      <h1>
        Hello <span className="text-red-700 underline text-4xl">Yash Bansod</span>
      </h1>
      <p>This is a initial stage of expense hub application</p>
      <Button onClick={() => console.log('hello')}>Click here</Button>
    </div>
  )
}

export default App
