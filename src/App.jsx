import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return(<div className="App">
    <div className="container">
      <div className="left">
        <h1>Discover Your Next Favorite Book</h1>
        <p>Explore our vast collection of books and find your next great read. Whether you're into fiction, non-fiction, or anything in between, we've got something for everyone.</p>
        <button>Browse Books</button>
      </div>
      <div className="right">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  </div>)
}

export default App
