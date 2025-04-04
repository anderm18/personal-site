import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Box } from '@mui/material';
import HeaderDisplay from './components/HeaderDisplay';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Footer } from './components/Footer';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Box sx={{backgroundColor: '#0b1929',  height: 'auto', backgroundSize: '100%'}}>
      <HeaderDisplay />
    </Box>
    <About />
    <Experience />
    <Projects />
    <Footer />

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
