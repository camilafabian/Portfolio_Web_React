import { Box, Flex, Image, Link, useBreakpointValue } from '@chakra-ui/react';
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
        <Image src={logotipo} alt="logo" w={useBreakpointValue({base: '120%', sm: '65%', md: '70%', lg: '80%', xl: '120%', xxl: '130%'})} />
      </Flex>
      <Image src={lista} alt="" display={useBreakpointValue({base: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none', xxl: 'none'})} className="desaparecer" />
      <Flex as="nav" mr="10%">
        <Link href="#hero" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})} fontFamily="Poppins" fontWeight="bold">Inicio</Link>
        <Link href="#sobremi" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})}  fontFamily="Poppins" fontWeight="bold">Sobre Mí</Link>
        <Link href="#servicios" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})}  fontFamily="Poppins" fontWeight="bold">Servicios</Link>
        <Link href="#portfolio" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})}  fontFamily="Poppins" fontWeight="bold">Portfolio</Link>
        <Link href="#clientes" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})}  fontFamily="Poppins" fontWeight="bold">Clientes</Link>
        <Link href="#contacto" color="#269d36" textDecoration="none" pl={useBreakpointValue({base: '10px', sm: '10px', md: '20px', lg: '30px', xl: '50px', xxl: '80px'})} fontSize={useBreakpointValue({base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px', xxl: '22px'})}  fontFamily="Poppins" fontWeight="bold">Contacto</Link>
      </Flex>
    </Box>
  )
}

export default Header;
