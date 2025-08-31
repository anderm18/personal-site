import ReactDOM from 'react-dom/client';
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
