import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import './Header.css'

const Header = () => {
  return (
    <Navbar expand="xl" className='Section_Navbar'>
      <Container>
        <Navbar.Brand href="#home"  className='Section_Navbrand'><ChevronLeftIcon/>Develop<span>er/</span><ChevronRightIcon/></Navbar.Brand>
        <Navbar.Toggle className='Section_NavbarToggle bg-light'></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto Section_Nav">
            <Nav.Link href="#home" className='Section_Navlink'><HomeRoundedIcon className='Section_linkIcons'/>Home</Nav.Link>
            <Nav.Link href="#skills" className='Section_Navlink'><PsychologyIcon className='Section_linkIcons'/>Skills</Nav.Link>
            <Nav.Link href="#education" className='Section_Navlink'><SchoolIcon className='Section_linkIcons'/>Education</Nav.Link>
            <Nav.Link href="#about" className='Section_Navlink'><InfoIcon className='Section_linkIcons'/>About Me</Nav.Link>
            <Nav.Link href="#contact" className='Section_Navlink'><AddIcCallIcon className='Section_linkIcons'/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;