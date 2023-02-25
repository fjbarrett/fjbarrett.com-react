import logo from "./logo.svg";
import profileImage from "./profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frank Barrett</h1>
        <h2>Developer</h2>
        <img src={profileImage} className="profile-image" alt="profile-image" />
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
            href="https://youtube.com/@FrankBarrett"
            target="_blank"
          >
            YouTube
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
