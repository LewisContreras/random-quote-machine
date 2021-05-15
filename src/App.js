
import './App.css';
import dbQuotes from "./dbQuotes.json"
let randomInit = Math.floor(Math.random()*dbQuotes.length);
let obInit = dbQuotes[randomInit]
let textInit = obInit.quote
let autInit = obInit.author


function App() {
  
  

  const handleClick = () =>{
    let text = document.getElementById("text");

    let author = document.getElementById("author");
    let randomNumber = Math.floor(Math.random()*dbQuotes.length);
    let randomObject = dbQuotes[randomNumber];
    
    text.textContent = `"${randomObject.quote}"`;
    author.textContent =  `- ${randomObject.author}`
    
    
    

  }
  

  return (
    <div id="wrapper" >
      <div id="quote-box" >
        <p id="text" >{textInit}</p>
        <p id="author" >{autInit}</p>
        <button onClick={handleClick} id="new-quote" >new</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" >twitter</a>
      </div>
    </div>

  );
}

export default App;
