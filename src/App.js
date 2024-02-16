import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sub_main_line from './components/Main/Sub_main_line';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Sub_main_line />
      <Main />
    </div>
  );
}
