import styled from 'styled-components';
import './App.css';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';


const Container = styled.div`
  color: white;
  background: url("../public/img/bg.jpeg") ;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App()
{
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
