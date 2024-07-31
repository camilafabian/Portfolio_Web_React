import { Box, Button, Flex, Heading, Image, Link, Text , useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import fotoPrincipal from '../../assets/foto1.png';


function Hero() {
  return (
    <Box display="flex" flexDirection="column" bg="#331949" color="#fff" maxW="100%" className="app" mt={useBreakpointValue({base: '30px', sm: '30px', md: '30px', lg: '30px', xl: '30px', xxl: '30px'})}>
      <Box as="section" id="hero" maxW="100%" pt="5%" display="flex" justifyContent="space-around" mx="8%">
        <Flex direction="column" w="50%" justifyContent="center" >
          <Heading  zIndex="5" as="h2" m="0"  pb="0%" whiteSpace='nowrap' fontSize={useBreakpointValue({base: '35px', sm: '40px', md: '40px', lg: '50px', xl: '70px', xxl: '70px'})} fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" mb="5%">Hola, Yo soy</Heading>
          <Heading  zIndex="5" as="h1" m="0" pt="0%" fontSize={useBreakpointValue({base: '46px', sm: '50px', md: '43px', lg: '55px', xl: '80px', xxl: '95px'})} fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" whiteSpace="nowrap">
            CAMILA <Text as="span" color="#269c36">FABIAN</Text>
          </Heading>
          <Heading as="h4" pt="7%" pb="3%" m="0" fontFamily="Poppins" fontWeight="normal" fontSize={useBreakpointValue({base: '10px', sm: '15px', md: '20px', lg: '25px', xl: '29px', xxl: '29px'})} lineHeight="100%">Soy una Desarrolladora Web</Heading>
          <Text  zIndex="5" pos="relative" w="110%" fontFamily="Poppins" fontWeight="200" fontSize={useBreakpointValue({base: '12px', sm: '12px', md: '16px', lg: '18px', xl: '18px', xxl: '18px'})} lineHeight="30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi voluptas? Vero culpa reiciendis quidem. Recusandae quibusdam incidunt mollitia! Possimus, aperiam debitis quod iste voluptatum porro beatae accusantium inventore. Vero.
          </Text>
          <Flex mt="2em" align="center" fontFamily="Poppins" fontSize="18px" fontWeight="bold">
            <Link href="#contacto">
              <Button bg="#269c36" color="#fff" borderRadius="30px" py="1em" px="3em" width="100%" border='none'  zIndex="5">Contactame</Button>
            </Link>
            <Link href="#Portfolio" color="#269c36" pl="4%" zIndex="5">Portfolio</Link>
          </Flex>
        </Flex>
        <Box>
          <Image src={fotoPrincipal} w="900px" zIndex="-5" display={useBreakpointValue({base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', xxl: 'flex'})} mr='-5%'/>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero;


