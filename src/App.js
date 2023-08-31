import './App.css';
import LoremTest from './components/LoremTest';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Categories from './components/categories/Categories';
import Cardsection from './components/cardsection/Cardsection';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Cardsection />
    <Categories />
    {/* <LoremTest /> */}
    </>
  );
}

export default App;
