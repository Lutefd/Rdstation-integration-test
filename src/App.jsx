import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.async = true;
    document.body.appendChild(script);
    if (showModal) {
      new window.RDStationForms(
        'botao-footer-2a6fae896af8c9f8755e',
        'UA-112272098-1'
      ).createForm();
    }
  }, [showModal]);

  return (
    <div className="App">
      <>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        {/* Render the modal if showModal is true */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={() => setShowModal(false)}>Close</button>
              <div
                role="main"
                id="botao-footer-2a6fae896af8c9f8755e"
                className="edit"
              ></div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
