import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import opi1 from '../../assets/opi1.jpg';
import opi2 from '../../assets/opi2.jpg';
import opi3 from '../../assets/opi3.jpg';
import opi4 from '../../assets/opi4.jpg';
import opi5 from '../../assets/opi5.jpg';
import opi6 from '../../assets/opi6.jpg';
import opi7 from '../../assets/opi7.png';
import fondo from '../../assets/circulogente2.png';

function Opiniones() {
  const [selectedOpinion, setSelectedOpinion] = useState(0);

  const clientes = [
    {
      OpiNombre: "Beto Bullicio",
      FotoOpi: opi7,
      OpiProfesion: "Empresario",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Ana Banana",
      FotoOpi: opi1,
      OpiProfesion: "Florista",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Hanna Montana",
      FotoOpi: opi2,
      OpiProfesion: "Ingeniera",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Max Power",
      FotoOpi: opi3,
      OpiProfesion: "Doble de Riesgo",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Armando Esteban Quito",
      FotoOpi: opi4,
      OpiProfesion: "Diseñador",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Elsa Lario",
      FotoOpi: opi5,
      OpiProfesion: "Espia encubierto",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
    {
      OpiNombre: "Ariana Grande",
      FotoOpi: opi6,
      OpiProfesion: "Modista",
      OpiDescripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic",
    },
  ];

  const isCircleLayout = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    xxl: true,
  });

  return (
    <Box as="section" margin="3% 15%" mt={useBreakpointValue({base: '20%', sm: '17%', md: '15%', lg: '12%', xl: '10%', xxl: '10%'})} textAlign="center" id="clientes">
      <Heading as="h2" fontSize={useBreakpointValue({base: '40px', sm: '40px', md: '40px', lg: '40px', xl: '60px', xxl: '70px'})}  mb="3%">
        ¿Qué Dicen <Text as="span" color="#269c36">Mis Clientes?</Text>
      </Heading>
      <Text color="gray.300" mb="5%" fontSize={useBreakpointValue({base: '12px', sm: '14px', md: '15px', lg: '18px', xl: '19px', xxl: '19px'})} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic incidunt modi voluptatibus quo ducimus libero suscipit sed molestias?
      </Text>

      <Flex
        justify="center"
        gap="15%"
        mt="0"
        direction={isCircleLayout ? 'row' : 'column'}
        alignItems={isCircleLayout ? 'center' : 'flex-start'}
      >
        <Box
          position="relative"
          width={isCircleLayout ? "50%" : "100%"}
          height={isCircleLayout ? '500px' : 'auto'}
          bgImage={isCircleLayout ? `url(${fondo})` : 'none'}
          bgSize="cover"
          bgPosition="center"
          mb={isCircleLayout ? "0" : "3%"}
        >
          {clientes.map((cliente, index) => (
            <Button
              key={index}
              onClick={() => setSelectedOpinion(index)}
              position={isCircleLayout ? "absolute" : "static"}
              backgroundColor="transparent"
              border="none"
              width={isCircleLayout ? "18%" : "auto"}
              height={isCircleLayout ? "18%" : "auto"}
              clipPath={isCircleLayout ? "circle(40%)" : "none"}
              transform={isCircleLayout ? "translate(-50%, -50%)" : "none"}
              ml={isCircleLayout ? '3%' : '0'}
              left={isCircleLayout ? `${50 + 35 * Math.cos((2 * Math.PI * index) / clientes.length)}%` : '0'}
              top={isCircleLayout ? `${50 + 35 * Math.sin((2 * Math.PI * index) / clientes.length)}%` : '0'}
              mb={isCircleLayout ? '0' : '10px'}
            >
              <Image
                src={cliente.FotoOpi}
                alt={cliente.OpiNombre}
                objectFit="cover"
                boxSize={isCircleLayout ? "100%" : "50px"}
                borderRadius={isCircleLayout ? "none" : "full"}
              />
            </Button>
          ))}
        </Box>

        <Box width={useBreakpointValue({base: "90%", sm: "80%", md: "70%", lg: "50%", xl: "30%"})} mt="3%" alignSelf="center">
          {selectedOpinion !== null && (
            <VStack
              backgroundColor="#269c36"
              color="white"
              p={useBreakpointValue({base: "20px", sm: "25px", md: "30px", lg: "30px", xl: "30px"})}
              borderRadius="8px"
              textAlign="center"
              position="relative"
              spacing={4}
            >
              <Image
                src={clientes[selectedOpinion].FotoOpi}
                alt={clientes[selectedOpinion].OpiNombre}
                borderRadius="full"
                width={useBreakpointValue({base: "100px", sm: "120px", md: "140px", lg: "150px", xl: "170px"})}
                height={useBreakpointValue({base: "100px", sm: "120px", md: "140px", lg: "150px", xl: "170px"})}
                mb="10px"
                mt={useBreakpointValue({base: "-50px", sm: "-60px", md: "-70px", lg: "-85px", xl: "-85px"})}
                clipPath="circle(50%)"
              />
              <Heading as="h3" size="lg" fontFamily="Poppins" m='0'>
                {clientes[selectedOpinion].OpiNombre}
              </Heading>
              <Text fontFamily="Poppins" color="#ddd" fontSize="18px" m='0'>
                {clientes[selectedOpinion].OpiProfesion}
              </Text>
              <Text lineHeight={useBreakpointValue({base: '150%', sm: '150%', md: '200%', lg: '200%', xl: '250%', xxl: "300%"})} fontSize="15px" m='0'>
                {clientes[selectedOpinion].OpiDescripcion}
              </Text>
            </VStack>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default Opiniones;

