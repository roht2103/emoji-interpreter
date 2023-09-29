import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😃": "Grinning Face with Big Eyes",
    "😑": "Expressionless Face",
    "😎": "Smiling Face with Sunglasses",
    "🤩": "Star-Struck",
    "😅": "Grinning Face with Sweat",
    "😚": "Kissing Face with Closed Eyes",
    "🤣": "Rolling on the Floor Laughing",
    "😍": "Smiling Face with Heart-Eyes",
    "🥰": "Smiling Face with Hearts",
    "🤗": "Smiling Face with Open Hands",
    "🤔": "hinking Face",
    "😴": "Sleeping Face",
    "🥱": "Yawning Face",
    "😫": "Tired Face",
    "😪": "Sleepy Face",
    "😯": "Hushed Face"
  };

  let emojies = Object.keys(emojiDictionary);
  var [meaning, setMeaning] = useState("");
  var [userInput, setuserInput] = useState("");
  function inputChangeHandeller(event) {
    var userInput = event.target.value;
    setuserInput(userInput);
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " we do'nt have this in our database";
    }

    setMeaning(meaning);
    // console.log(meaning);
  }

  var [emoji, setEmoji] = useState("");

  function emojiClickHandeller(emoji) {
    setEmoji(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}>Emoji Interpreter</h1>
      <input
        placeholder="put an emoji to get the meaning below"
        onChange={inputChangeHandeller}
      />

      <h1>
        {userInput}
        {emoji}
        {meaning}
      </h1>
      <h2>emojies we know</h2>
      <div className="emojiList">
        {emojies.map(function (items) {
          return (
            <span
              id="emoji"
              onClick={() => emojiClickHandeller(items)}
              style={{ fontSize: "2.5rem", cursor: "pointer" }}
            >
              {items}
            </span>
          );
        })}
      </div>
    </div>
  );
}
