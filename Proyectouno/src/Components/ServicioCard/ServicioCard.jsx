import React from 'react';
import { Box, Image, Heading, Text, Link, Center } from '@chakra-ui/react';

function ServicioCard({ imgnombre, titulo, descripcion }) {
  return (
    <Box
      backgroundColor="white"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      textAlign="center"
      width="95%"
      padding='2%'
      m='0'
      paddingTop='2%'
      position="relative"
      transition="transform 0.3s"
      display="flex"
      flexDirection="column"
      alignItems="start"
      clipPath="polygon(0 0, 100% 10%, 100% 100%, 0% 100%)"
      _hover={{ transform: 'translateY(-10px)' }}
    >
      <Image src={imgnombre} alt={titulo} width="22%" ml="7%" mb="0.2em" mt="1.5em" />
      <Heading fontSize="1.5rem" marginBottom="1rem" color="#269c36" fontWeight="bold" textAlign="left" marginLeft="7%" >
        {titulo}
      </Heading>
      <Text fontSize="1rem" color="#666" marginBottom="1.5rem" textAlign="left" mx="7%" my="0%" mb='2%'>
        {descripcion}
      </Text>
      <Link href="#" color="rgb(44, 48, 48)" mb='7%' textDecoration="underline" marginTop="auto" textAlign="left" marginLeft="7%">
        Get Started
      </Link>
    </Box>
  );
}

export default ServicioCard;

