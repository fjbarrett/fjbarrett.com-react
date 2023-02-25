import logo from "./logo.svg";
import profileImage from "./profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="profile-image" alt="profile-image" />
        <h1>Frank Barrett</h1>
        <p className="links">
          <a
            className="App-link"
            href="https://github.com/fjbarrett"
            target="_blank"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://twitter.com/fjbarrett"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className="App-link"
            href="https://instagram.com/fjbarrett"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="App-link"
            href="https://facebook.com/fjbarrett"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="App-link"
            href="https://twitch.com/fjbarrett"
            target="_blank"
          >
            Twitch
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
