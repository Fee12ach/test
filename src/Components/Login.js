import React from 'react'
import { Button, Box, Flex, Input, Heading } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

 const App = () => {

    const history = useHistory();

  return (
    <div>
      <center>
      <Box bg="grey" w="100%" p={250} color="white">
        <Flex justify-content center display flex>
          <Box w="50%" p="6" bg="#483D8B">
            <Heading>Login</Heading> <br />
            <Input mb="6" variant="filled" placeholder="Email" />
            <Input mb="6" variant="filled" placeholder="Password" />
            <Button onClick={() => {history.push("/Homepage");}} colorScheme="blue">Login</Button>
          </Box>
        </Flex>
      </Box>
      
      </center>
    </div>
  )
}

export default App;
