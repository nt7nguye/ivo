import './App.css'
import Text from './components/Text';

function App() {
  return (
    <div>
      <Text value="Hello World" bold/>
      <Text value="Hello World" italic />
      <Text value="Hello World" underline />
      <Text value="Hello World" bold italic />
      <Text value="Hello World" bold underline />
      <Text value="Hello World" italic underline />
      <Text value="Hello World" bold italic underline />
    </div>
  )
}

export default App
