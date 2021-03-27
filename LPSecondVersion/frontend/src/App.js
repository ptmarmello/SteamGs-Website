import React from 'react';
import './App.css';
import Routes from './routes';



// import ReactGA from 'react-ga';

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };



function App() {
  return (
    <div className="App">
        <Routes/>
    </div>
  );
}

export default App;
