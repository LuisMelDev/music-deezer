import React from 'react'
import { Center, useColorModeValue,Text } from '@chakra-ui/react'

const Footer = () => {
    const footerBg = useColorModeValue("gray.100", "gray.900");
    const footerBorder = useColorModeValue("gray.200", "gray.700");
    return (
        <Center as="footer" py="4" mt="3" borderTop="1px" borderColor={footerBorder} bg={footerBg}>
        
                <Text>This App was created by <strong>Luis Melendez</strong> </Text>
            
        </Center>
    )
}

export default Footer
