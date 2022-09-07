import logo from './logo.svg';
import styles from './App.module.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>

    </div>

  );
}

export default App;
