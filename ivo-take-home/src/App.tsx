import './App.css'
import Block from './components/Block';
import Text from './components/Text';

function App() {
  return (
    <div>
      <Block title="Hello World" type="block" children={[
        {
          "bold": true,
          "text": "PARTIES"
        },
        {
          "text": "\n 1.  "
        },
        {
          "color": "rgb(175, 56, 235)",
          "type": "p",    // "type": "mention",
          "title": "Service Provider's Name",
          "children": [
            {
              "text": "Blackmoon"
            }
          ],
          // "id": "Provider",
          // "value": "Blackmoon"
        },
        {
          "text": " ("
        },
        {
          "bold": true,
          "text": "“Provider”"
        },
        {
          "text": ").\n 2.  "
        },
        {
          "color": "rgb(175, 184, 59)",
          "type": "p",    // "type": "mention",
          "title": "Client's Name",
          "children": [
            {
              "text": "James Inc"
            }
          ],
          // "id": "Client",
          // "value": "James Inc"
        },
        {
          "text": " ("
        },
        {
          "bold": true,
          "text": "“Client”"
        },
        {
          "text": ").\nEach being a "
        },
        {
          "bold": true,
          "text": "“party”"
        },
        {
          "text": " and together being the "
        },
        {
          "bold": true,
          "text": "“parties”"
        },
        {
          "text": "."
        }
      ]}>
      </Block>
      <Block title="Second block" type="h2" children={[
        {text: 'Hello World', bold: true},
        {text: 'Hello World', italic: true},
        {text: 'Hello World', underline: true},
      ]}>
      </Block>
      <p>
        <Text text="Hello World" bold italic underline />
        <Text text="Hello World" color="rgb(20, 170, 245)" />
      </p>
    </div>
  )
}

export default App
