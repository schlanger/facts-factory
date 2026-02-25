
import { useFetchApi } from "./hooks/useFetchApi"

function App() {

  const {data} = useFetchApi<{fact: {
    text: string
  }}>("facts/random")

  return (
    <div className='flex-1 flex flex-col gap-4 max-w-[800px] p-4' >
        <h1> Fact of the day </h1>
        <span>{data?.fact.text}</span>
      </div>
  )
}

export default App
