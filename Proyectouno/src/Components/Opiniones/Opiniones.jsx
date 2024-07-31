import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
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

  return (
    <Box as="section" margin="3% 15%" mt="10%" textAlign="center" id="clientes">
      <Heading as="h2" fontSize="60px" mb="3%">
        ¿Qué Dicen <Text as="span" color="#269c36">Mis Clientes?</Text>
      </Heading>
      <Text color="gray.300" mb="5%" fontSize="19px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum debitis illum iste inventore, voluptatum error magni assumenda, cumque veritatis hic incidunt modi voluptatibus quo ducimus libero suscipit sed molestias?
      </Text>

      <Flex justify="center" gap="15%" mt="0">
        <Box
          position="relative"
          width="50%"
          height="500px"
          bgImage={`url(${fondo})`}
          bgSize="cover"
          bgPosition="center"
        >
          {clientes.map((cliente, index) => (
            <Button
                key={index}
                onClick={() => setSelectedOpinion(index)}
                position="absolute"
                backgroundColor="transparent"
                border="none"
                width="18%"
                height="18%"
                clipPath="circle(50%)"
                transform="translate(-50%, -50%)"
                ml='3%'
                left={`${50 + 35 * Math.cos((2 * Math.PI * index) / clientes.length)}%`}
                top={`${50 + 35 * Math.sin((2 * Math.PI * index) / clientes.length)}%`}
                >
                <Image
                    src={cliente.FotoOpi}
                    alt={cliente.OpiNombre}
                    objectFit="cover"
                    boxSize="140%"
                />
            </Button>

          ))}
        </Box>

        <Box width="30%" mt="3%" alignSelf="center">
          {selectedOpinion !== null && (
            <VStack
              backgroundColor="#269c36"
              color="white"
              p="30px"
              borderRadius="8px"
              textAlign="center"
              position="relative"
              spacing={4}
            >
              <Image
                src={clientes[selectedOpinion].FotoOpi}
                alt={clientes[selectedOpinion].OpiNombre}
                borderRadius="full"
                width="170px"
                height="170px"
                mb="10px"
                mt="-85px"
                clipPath="circle(50%)"
              />
              <Heading as="h3" size="lg" fontFamily="Poppins" m='0'>
                {clientes[selectedOpinion].OpiNombre}
              </Heading>
              <Text fontFamily="Poppins" color="#ddd" fontSize="18px"  m='0'>
                {clientes[selectedOpinion].OpiProfesion}
              </Text>
              <Text lineHeight="300%" fontSize="15px"  m='0'>
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

