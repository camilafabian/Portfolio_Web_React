import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import logotipo from '../../assets/logo AJELINA.png';
import lista from '../../assets/lista.svg';

function Header() {
  return (
    <Box as="header"
         position="fixed"
         bg="#331848"
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         w="100%"
         zIndex="1000"
         pt="10px">
      <Flex ml="10%">
        <Image src={logotipo} alt="logo" w="290px" />
      </Flex>
      <Image src={lista} alt="" display='none' className="desaparecer" />
      <Flex as="nav" mr="10%">
        <Link href="#hero" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Inicio</Link>
        <Link href="#sobremi" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Sobre Mí</Link>
        <Link href="#servicios" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Servicios</Link>
        <Link href="#portfolio" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Portfolio</Link>
        <Link href="#clientes" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Clientes</Link>
        <Link href="#contacto" color="#269d36" textDecoration="none" pl="80px" fontSize="20px" fontFamily="Poppins" fontWeight="bold">Contacto</Link>
      </Flex>
    </Box>
  )
}

export default Header;
