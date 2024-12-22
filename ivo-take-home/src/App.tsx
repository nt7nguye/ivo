import './App.css'
import Editor from './Editor';

function App() {

  return (
    <Editor input={{
      title: "Hello World",
      type: "block",
      children: [
        {
          bold: true,
          text: "PARTIES"
        },
        {
          "text": "\n 1.  "
        },
        {
          "color": "rgb(175, 56, 235)",
          "type": "mention",
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
          "type": "mention",
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
      ]}}
    />
  )
}

export default App
