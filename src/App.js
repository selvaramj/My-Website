import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Portfolio />
      </section>
    </div>
  );
}

export default App;
