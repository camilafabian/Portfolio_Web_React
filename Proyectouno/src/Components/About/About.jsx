import { Box, Button, Flex, Heading, Image, Text , useBreakpointValue} from '@chakra-ui/react';
import React from 'react';
import fotoSecundaria from '../../assets/FOTO2.png';

function About() {
  return (
    <Box display="flex" flexDirection="column" bg="#331949" color="#fff" maxW="100%" className="app">
      <Box as="section" id="sobremi" ml="10%" mr={useBreakpointValue({base: '8%', sm: '10%', md: '10%', lg: '11%'})} mt="7%" display="flex" alignItems="flex-start" className="about">
        <Box>
          <Image src={fotoSecundaria} w='2500px' display={useBreakpointValue({base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', xxl: 'flex'})}/>
        </Box>
        <Box ml="6%" className="textoabout">
          <Heading as="h2" mt="4%" mb="0.5em" p="0" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" fontSize={useBreakpointValue({base: '50px', sm: '40px', md: '46px', lg: '55px', xl: '80px', xxl: '95px'})} >
            <Text as="span" color="#269c36">Sobre </Text>Mí
          </Heading>
          <Heading as="h4" pt="0" mt="0" fontFamily="Poppins" fontSize={useBreakpointValue({base: '14px', sm: '16px', md: '16px', lg: '20px', xl: '27px', xxl: '30px'})} lineHeight="200%" fontWeight="600" p="0" m="0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, excepturi. Doloribus consectetur velit ut debitis labore, accusamus incidunt fugiat quasi saepe.
          </Heading>
          <Text fontSize={useBreakpointValue({base: '12px', sm: '12px', md: '12px', lg: '14px', xl: '14px', xxl: '16px'})} mt="4%" fontFamily="Poppins" fontWeight="200" lineHeight="30px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur illo odit consequuntur atque sequi eum nesciunt laborum iste, ea officia obcaecati accusantium repudiandae ipsa. Nihil harum molestias numquam inventore!
          </Text>
          <Button mt="3%" w="250px" h="100%" py="10px" borderRadius="35px" color="#fff" bg="#269c36" fontWeight="bold" border='none' fontFamily="Poppins" fontSize="16px" p='20px'>
            Descargar CV
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default About;

