import { useState } from 'react'; 
import Search from './components/Search';
import Header from './components/Header' 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[word, setWord] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
