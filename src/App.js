import { useState } from "react";
import "./styles.css";
var emojiDictonary = {
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌲": "Evergreen Tree",
  "🌵": "Cactus",
  "🎋": "Tanabata Tree",
  "🎄": "Christmas Tree",
  "🎍": "Bamboo"
};
var weKnowTheseEmoji = Object.keys(emojiDictonary);
export default function App() {
  const [emojiMeanning, setEmojiMeanning] = useState(
    "Emoji meaning will show here."
  );
  function inputEventHandler(event) {
    var userInput = event.target.value;
    var emojiMeanning = emojiDictonary[userInput];
    emojiMeanning=emojiMeanning.replaceAll(" ",'');
    if (emojiMeanning === undefined) {
      emojiMeanning = "Sorry we don't have this emoji in our database.";
    }
    setEmojiMeanning(emojiMeanning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeanning = emojiDictonary[emoji];
    setEmojiMeanning(emojiMeanning);
  }
  return (
    <div className="App">
      <h1 className="heading">Play With Plants</h1>
      <input
        onChange={inputEventHandler}
        placeholder="On windows, use 'Win + dot' keys."
      />
      <div className="meaning-text">{emojiMeanning}</div>
      <p>Emojies in our database</p>
      {weKnowTheseEmoji.map((emoji) => {
        return (
          <span
            className="knownEmoji"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
