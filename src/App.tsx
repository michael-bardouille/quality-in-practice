import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NavCards from './components/NavCards';
import NavOptions from './components/NavOptions';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <NavOptions />
        <NavCards />
      </main>
    </>
  );
}

export default App;
