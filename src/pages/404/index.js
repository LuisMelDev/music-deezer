import React from 'react'
import {Center, Image, Heading} from '@chakra-ui/react'
import logo from 'images/error404.png'

const NotFoundError = () => {
    return (
        <Center minH="100%" flexDirection="column"  >
            <Image src={logo} alt="error image" w="20rem" mb="1" />
            <Heading as="h3" colorScheme="tomato" fonstSize="1.5rem" mb="2" >Page Not Found</Heading> 
        </Center>
    )
}

export default NotFoundError
