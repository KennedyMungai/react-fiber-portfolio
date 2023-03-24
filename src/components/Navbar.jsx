import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

const Icons = styled.div`

`

const Icon = styled.img`

`

const Logo = styled.div`

`

const List = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
`

const ListItem = styled.li`

`

const Button = styled.button`

`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="../img/logo.png" />
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Studio</ListItem>
                  <ListItem>Works</ListItem>
                  <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
              <Icon src="./img/search.png" />
              <Button>Hire Now!</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar