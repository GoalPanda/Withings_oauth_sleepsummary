import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { withings_oauth_login } from 'withings/api'
const Home = () => {

  const handleLogin = (e) => {
    withings_oauth_login()
  }
  
  return (
    <Container>
      <Button
        primary
        onClick={(e) => { handleLogin() }}
      >Login to Withings</Button>
    </Container>
  )
}
export default Home
