import './App.css'
import Text from './components/Text';

function App() {

  return (
    <div>
      <Text text="Hello World" bold/>
      <Text text="Hello World" italic />
      <Text text="Hello World" underline />
      <Text text="Hello World" bold italic />
      <Text text="Hello World" bold underline />
      <Text text="Hello World" italic underline />
      <Text text="Hello World" bold italic underline />
    </div>
  )
}

export default App
