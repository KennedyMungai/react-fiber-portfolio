import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`

const Links = styled.div`

`

const Icons = styled.div`

`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png" />
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Studio</ListItem>
                  <ListItem>Works</ListItem>
                  <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
              <Icon src="./img/search.png" />
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar