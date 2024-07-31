import React, { useState } from 'react';
import { Box, Heading, Flex, Link, Grid, Image, Text } from '@chakra-ui/react';
import gato1 from '../../assets/gato1.png';
import gato2 from '../../assets/gato2.png';
import perritos1 from '../../assets/perritos1.png';
import perritos2 from '../../assets/perritos2.png';
import perritos3 from '../../assets/perritos3.png';
import paisaje1 from '../../assets/paisaje1.png';
import paisaje2 from '../../assets/paisaje2.png';
import paisaje3 from '../../assets/paisaje3.png';
import paisaje4 from '../../assets/paisaje4.jpg';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('TODOS');

  const galeria = [
    { id: 1, img: gato1, titulo: 'Gato1', categoria: '(°~°)', tab: 'DESARROLLO WEB' },
    { id: 2, img: gato2, titulo: 'Gato2', categoria: '(°~°)', tab: 'DESARROLLO WEB' },
    { id: 3, img: perritos1, titulo: 'Perro1', categoria: '(°~°)', tab: 'DISEÑO WEB' },
    { id: 4, img: perritos2, titulo: 'Perro2', categoria: '(°~°)', tab: 'DISEÑO WEB' },
    { id: 5, img: perritos3, titulo: 'Perro3', categoria: '(°~°)', tab: 'WORK' },
    { id: 6, img: paisaje1, titulo: 'Paisaje1', categoria: '(°~°)', tab: 'APPS MOVILES' },
    { id: 7, img: paisaje2, titulo: 'Paisaje2', categoria: '(°~°)', tab: 'APPS MOVILES' },
    { id: 8, img: paisaje3, titulo: 'Paisaje3', categoria: '(°~°)', tab: 'WORDPRESS' },
    { id: 9, img: paisaje4, titulo: 'Paisaje4', categoria: '(°~°)', tab: 'WORDPRESS' },
  ];

  const tabs = ['TODOS', 'DESARROLLO WEB', 'DISEÑO WEB', 'APPS MOVILES', 'WORDPRESS', 'WORK'];

  return (
    <Box mt="3%" mx="15%" id="portfolio">
      <Heading as="h2" textAlign="center" mb="6%" fontFamily="acumin-pro, sans-serif" fontWeight="700" fontSize="70px">
        <Text as="span" color="#269c36">Mi Port</Text>folio
      </Heading>
      <Flex as="nav" justifyContent="space-around" mx="15%" mb="7%">
        {tabs.map(tab => (
          <Link
            key={tab}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab);
            }}
            color="white"
            textDecoration="none"
            fontFamily="Poppins"
            _hover={{
              color: '#331848',
              backgroundColor: '#269c36',
              borderRadius: '25px',
              padding: '1% 2%',
            }}
            _active={{
              color: '#331848',
              backgroundColor: '#269c36',
              borderRadius: '25px',
              padding: '1% 2%',
            }}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </Link>
        ))}
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(30%, 1fr))" gap="5%" className="galeria">
        {galeria
          .filter(item => activeTab === 'TODOS' || item.tab === activeTab)
          .map(item => (
            <Box key={item.id} position="relative" overflow="hidden" height="300px">
              <Image src={item.img} alt={item.titulo} width="100%" height="100%" objectFit="cover" />
              <Box
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                right="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="rgba(0, 0, 0, 0.7)"
                opacity="0"
                transition="opacity 0.5s ease"
                _hover={{ opacity: 1 }}
                zIndex='0'
              >
                <Box textAlign="center" color="white">
                  <Text fontSize="20px" fontWeight="bold" fontFamily="Poppins">{item.titulo}</Text>
                  <Text fontSize="16px" fontFamily="Poppins">{item.categoria}</Text>
                </Box>
              </Box>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
