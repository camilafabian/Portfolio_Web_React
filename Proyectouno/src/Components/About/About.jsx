import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import fotoSecundaria from '../../assets/FOTO2.png';

function About() {
  return (
    <Box display="flex" flexDirection="column" bg="#331949" color="#fff" maxW="100%" className="app">
      <Box as="section" id="sobremi" ml="10%" mr="13%" mt="7%" display="flex" alignItems="flex-start" className="about">
        <Box>
          <Image src={fotoSecundaria} w="650px" />
        </Box>
        <Box ml="6%" className="textoabout">
          <Heading as="h2" mt="4%" mb="0.5em" p="0" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontStyle="normal" fontSize="70px">
            <Text as="span" color="#269c36">Sobre </Text>Mí
          </Heading>
          <Heading as="h4" pt="0" mt="0" fontFamily="Poppins" fontSize="30px" lineHeight="200%" fontWeight="600" p="0" m="0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, excepturi. Doloribus consectetur velit ut debitis labore, accusamus incidunt fugiat quasi saepe.
          </Heading>
          <Text fontSize="16px" mt="4%" fontFamily="Poppins" fontWeight="200" lineHeight="30px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur illo odit consequuntur atque sequi eum nesciunt laborum iste, ea officia obcaecati accusantium repudiandae ipsa. Nihil harum molestias numquam inventore!
          </Text>
          <Button mt="3%" w="32%" h="100%" py="3%" borderRadius="35px" color="#fff" bg="#269c36" fontWeight="bold" border='none' fontFamily="Poppins" fontSize="16px">
            Descargar CV
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default About;

