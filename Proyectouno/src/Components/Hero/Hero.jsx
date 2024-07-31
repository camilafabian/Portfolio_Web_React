import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import fotoPrincipal from '../../assets/foto1.png';

function Hero() {
  return (
    <Box display="flex" flexDirection="column" bg="#331949" color="#fff" maxW="100%" className="app">
      <Box as="section" id="hero" maxW="100%" pt="5%" display="flex" justifyContent="space-around" mx="8%">
        <Flex direction="column" w="50%" justifyContent="center">
          <Heading as="h2" m="0"  pb="0%" fontSize="70px" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" mb="5%">Hola, Yo soy</Heading>
          <Heading as="h1" m="0" pt="0%" fontSize="95px" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" whiteSpace="nowrap">
            CAMILA <Text as="span" color="#269c36">FABIAN</Text>
          </Heading>
          <Heading as="h4" pt="7%" pb="3%" m="0" fontFamily="Poppins" fontWeight="normal" fontSize="29px" lineHeight="100%">Soy una Desarrolladora Web</Heading>
          <Text pos="relative" w="110%" fontFamily="Poppins" fontWeight="200" fontSize="18px" lineHeight="30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi voluptas? Vero culpa reiciendis quidem. Recusandae quibusdam incidunt mollitia! Possimus, aperiam debitis quod iste voluptatum porro beatae accusantium inventore. Vero.
          </Text>
          <Flex mt="2em" align="center" fontFamily="Poppins" fontSize="18px" fontWeight="bold">
            <Link href="#contacto">
              <Button bg="#269c36" color="#fff" borderRadius="30px" py="1em" px="3em" width="100%" border='none'>Contactame</Button>
            </Link>
            <Link href="#Portfolio" color="#269c36" pl="4%">Portfolio</Link>
          </Flex>
        </Flex>
        <Box>
          <Image src={fotoPrincipal} w="900px" zIndex="-1" />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero;


