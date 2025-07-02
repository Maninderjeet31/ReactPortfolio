import './App.css';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home'
import AllWork from './component/Works/AllWork';
import AllSkills from './component/Skills/AllSkills';
import AllCertificates from './component/Certificates/AllCertificates';
import AllProjects from './component/Projects/AllProjects';
import AllEducation from './component/Education/AllEducation';
import About from './component/About/About';
import Connect from './component/Contact/Connect';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ paddingTop: '70px' }}>
        <Header />
          <Container className="py-1rem" >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" Component={AllWork} />
                <Route path="/about" Component={About} />
                 <Route path="/skill" Component={AllSkills} />
                 <Route path="/certs" Component={AllCertificates} />
                 <Route path="/projects" Component={AllProjects} />
                 <Route path="/education" Component={AllEducation} />
                 <Route path="/connect" Component={Connect} />
            </Routes>
          </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
