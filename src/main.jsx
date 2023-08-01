import App from './App.jsx'
import { ContextProvider } from './ContextProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root')); 
root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>  
);
