import React, { useState } from 'react';
import { Box, Heading, Flex, Link, Grid, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import gato1 from '../../assets/gato1.png';
import gato2 from '../../assets/gato2.png';
import perritos1 from '../../assets/perritos1.png';
import perritos2 from '../../assets/perritos2.png';
import perritos3 from '../../assets/perritos3.png';
import paisaje1 from '../../assets/paisaje1.png';
import paisaje2 from '../../assets/paisaje2.png';
import paisaje3 from '../../assets/paisaje3.png';
import paisaje4 from '../../assets/paisaje4.jpg';
import gato3 from '../../assets/gato3.png';
import tortuga1 from '../../assets/tortuga1.png';
import tortuga2 from '../../assets/tortuga2.png';

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
    { id: 10, img: gato3, titulo: 'Gato3', categoria: '(°~°)', tab: 'WORK' },
    { id: 11, img: tortuga1, titulo: 'Tortuga1', categoria: '(°~°)', tab: 'WORK' },
    { id: 11, img: tortuga2, titulo: 'Tortuga2', categoria: '(°~°)', tab: 'WORK' },
  ];

  const tabs = ['TODOS', 'DESARROLLO WEB', 'DISEÑO WEB', 'APPS MOVILES', 'WORDPRESS', 'WORK'];

  const gridTemplateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
    xxl: 'repeat(4, 1fr)',
  });

  const gridGap = useBreakpointValue({
    base: '10px',
    sm: '10px',
    md: '20px',
    lg: '20px',
    xl: '30px',
    xxl: '30px',
  });

  const imageHeight = useBreakpointValue({
    base: '200px',
    sm: '200px',
    md: '250px',
    lg: '300px',
    xl: '350px',
    xxl: '400px',
  });

  return (
    <Box mt="3%" mx="15%" id="portfolio">
      <Heading
        as="h2"
        textAlign="center"
        mb="6%"
        fontFamily="acumin-pro, sans-serif"
        fontWeight="700"
        fontSize={useBreakpointValue({
          base: '40px',
          sm: '40px',
          md: '40px',
          lg: '40px',
          xl: '60px',
          xxl: '70px',
        })}
      >
        <Text as="span" color="#269c36">Mi Port</Text>folio
      </Heading>
      <Flex as="nav" justifyContent="space-around" mx={useBreakpointValue({base: '4%', sm: '6%', md: '8%', lg: '10%', xl: '13%', xxl: '15%'})} mb="7%" fontSize={useBreakpointValue({base: '8px', sm: '8px', md: '12px', lg: '14px', xl: '16px', xxl: '18px'})}>
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
      <Grid templateColumns={gridTemplateColumns} gap={gridGap} className="galeria">
        {galeria
          .filter(item => activeTab === 'TODOS' || item.tab === activeTab)
          .map(item => (
            <Box key={item.id} position="relative" overflow="hidden" height={imageHeight}>
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
