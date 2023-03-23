import styled from 'styled-components';
import './App.css';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';


const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
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
