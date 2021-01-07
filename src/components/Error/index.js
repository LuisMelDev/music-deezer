import { Center, Text, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import logo from 'images/navegador.png'

const Error = ({error}) => {
    return (
        <Center minH="100%" flexDirection="column"  >
            <Image src={logo} alt="error image" w="20rem" mb="1" />
            <Heading as="h3" colorScheme="tomato" fonstSize="1.5rem" mb="2" >An error has occurred</Heading> 
            <Text as="span" color="red.500" >{error.message}</Text>
        </Center>
    )
}

export default Error
