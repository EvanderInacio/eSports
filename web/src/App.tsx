
interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <button>
     {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Button 1" />
      <Button title="Button 2" />
      <Button title="Button 3"/>
    </div>
  )
}

export default App
