import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import ServicioCard from '../ServicioCard/ServicioCard';
import serv1 from '../../assets/SERVICIO1.png';
import serv2 from '../../assets/SERVICIO2.png';
import serv3 from '../../assets/SERVICIO3.png';
import serv4 from '../../assets/SERVICIO4.png';
import serv5 from '../../assets/SERVICIO5.png';
import serv6 from '../../assets/SERVICIO6.png';

const Servicios = () => {
  const skills = [
    {
      imgnombre: serv1,
      titulo: "Diseño Web",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgnombre: serv2,
      titulo: "Desarrollo Web",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgnombre: serv3,
      titulo: "Re-Diseño Web",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgnombre: serv4,
      titulo: "Desarrollo de apps",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgnombre: serv5,
      titulo: "Diseño de Producto",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
    {
      imgnombre: serv6,
      titulo: "Soluciones Tecnologicas",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque, repellendus consectetur.",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" bg="#331949" color="#fff" maxW="100%" className="app">
      <Box as="section" id="servicios" ml="10%" mr="10%" pt="4%" display="flex" flexDirection="column" alignItems="center" className="servicio">
        <Box className="seccionservicios" textAlign="center" mb="2rem">
          <Heading as="h2" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontSize="70px">
            Mis <Text as="span" color="#269c36">Servicios</Text> Principales
          </Heading>
          <Text className="subtituloservicio" textAlign="center" px="20%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate commodi, magni voluptates praesentium sapiente, ab blanditiis voluptatum architecto atque, provident illo doloribus voluptatem magnam esse culpa earum vel similique!
          </Text>
        </Box>
        <SimpleGrid columns={3} spacing="1em" width='75%' >
          {skills.map((elemento, index) => (
            <ServicioCard
              key={index}
              imgnombre={elemento.imgnombre}
              titulo={elemento.titulo}
              descripcion={elemento.descripcion}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Servicios;