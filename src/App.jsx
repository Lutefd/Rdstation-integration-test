import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.async = true;
    document.body.appendChild(script);
    new window.RDStationForms(
      'botao-footer-2a6fae896af8c9f8755e',
      'UA-112272098-1'
    ).createForm();
  }, []);
  return (
    <div className="App">
      <div role="main" id="botao-footer-2a6fae896af8c9f8755e"></div>
    </div>
  );
}

export default App;
