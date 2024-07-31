import React from 'react';
import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Image,
  Link,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import mail from '../../assets/mail.png';
import telefono from '../../assets/telefono.png';
import ubicacion from '../../assets/ubicacion.png';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import x from '../../assets/x.svg';
import instagram from '../../assets/instagram.svg';

function Footer() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mensaje: '',
    tema: '',
  });

  const [errors, setErrors] = useState({});

  function validarFormulario() {
    const { name, email, mensaje, tema } = formState;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (/\d/.test(name)) {
      newErrors.name = 'El nombre no puede contener números';
    }

    if (!email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!tema.trim()) {
      newErrors.tema = 'El tema es obligatorio';
    }

    if (!mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  }

  const formWidth = useBreakpointValue({ base: '90%', sm: '80%', md: '70%', lg: '60%', xl: '40%', xxl: '30%' });
  const columnDirection = useBreakpointValue({ base: 'column', lg: 'row' });
  const columnSpacing = useBreakpointValue({ base: '5%', lg: '15%' });
  // const buttonSize = useBreakpointValue({ base: '30%', sm: '25%', md: '20%', lg: '15%', xl: '10%' });

  return (
    <Box as="section" bg="#331949" color="black" py={10} id="contacto">
      <Box textAlign="center" mb={10}>
        <Heading color="white" mt="4%" p="0" fontFamily="acumin-pro, sans-serif" mb="2%" fontWeight="700" fontStyle="normal" fontSize={useBreakpointValue({ base: '30px', sm: '35px', md: '40px', lg: '45px', xl: '50px', xxl: '60px' })}>
          <Text as="span" color="#269c36">Suscribite</Text> A Las Novedades
        </Heading>
        <Text color="white" mb="2%" mx='2%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ducimus! Asperiores deserunt nulla totam ut earum?</Text>
        <Box mt={6} align="center">
          <form onSubmit={e => e.preventDefault()}>
            <Flex width={formWidth} direction="row" >
              <Input textcolor="black" type="email" placeholder="Ingrese su email" bg="white" color="black" borderTopLeftRadius="30px" borderBottomLeftRadius="30px" width="70%" border="none" p={4} />
              <Button onClick={validarFormulario} bg="#269c36" color="white" borderTopRightRadius="30px" borderBottomRightRadius="30px" width="155px" border="none" p={4}>
                Suscribirse ahora
              </Button>
            </Flex>
            {errors.email && (
              <Text color="red" mt={2}>
                {errors.email}
              </Text>
            )}
          </form>
        </Box>
      </Box>
      <Box textAlign="center" mb={10}>
        <Heading color="white" fontFamily="acumin-pro, sans-serif" mb="2%" mt="5%" fontWeight="700" fontStyle="normal" fontSize={useBreakpointValue({ base: '30px', sm: '35px', md: '40px', lg: '45px', xl: '50px', xxl: '60px' })}>
          Ponte En Con<Text as="span" color="#269c36">tacto Conmigo</Text>
        </Heading>
        <Text color="white" mx='2%' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam quae vero, Quibusdam odit molestia</Text>
      </Box>
      <Flex direction={columnDirection} justify="space-between" mb={10} alignItems="center">
        <Box width={formWidth} ml={columnSpacing}>
          <form onSubmit={e => e.preventDefault()}>
            <Heading mt='30px' size="md" mb={4} color="#C5990D" fontFamily="Roboto Condensed" fontWeight="normal" fontSize="25px">
              ENVIAME UN MENSAJE
            </Heading>
            <VStack spacing={4} align="flex-start">
              <Box width="100%">
                <Input id="name" width="80%" mt="30px" py="10px" placeholder="Tu Nombre" value={formState.name} onChange={handleInputChange} bg="white" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray' }} />
                {errors.name && (
                  <Text color="red" mt={2}>
                    {errors.name}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input id="email"  width="80%" mt="30px" py="10px" placeholder="Tu Email" value={formState.email} onChange={handleInputChange} bg="white" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray' }} />
                {errors.email && (
                  <Text color="red" mt={2}>
                    {errors.email}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input id="tema" width="80%" mt="30px" py="10px" placeholder="El Tema De Su Mensaje" value={formState.tema} onChange={handleInputChange} bg="white" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray' }} />
                {errors.tema && (
                  <Text color="red" mt={2}>
                    {errors.tema}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input as="textarea" width="80%" mt="30px" py="10px" id="mensaje" placeholder="Escribe Tu Mensaje" value={formState.mensaje} onChange={handleInputChange} bg="white" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray' }} resize="vertical" minHeight="20vh" />
                {errors.mensaje && (
                  <Text color="red" mt={2}>
                    {errors.mensaje}
                  </Text>
                )}
              </Box>
              <Button mt="10px"  onClick={validarFormulario} bg="#269c36" color="white"  width='200px' alignSelf="flex-start" borderRadius="30px" p="15px" fontFamily="Roboto Condensed" border="none">
                CONTACTAME
              </Button>
            </VStack>
          </form>
        </Box>
        <Box width={formWidth} >
          <Box mb={10} >
            <Heading mt='30px' size="md" mb={4} color="#C5990D" fontFamily="Roboto Condensed" fontWeight="normal" fontSize="25px">
              INFORMACION DE CONTACTO
            </Heading>
            <Text color="white" width="100%" lineHeight="200%">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quia exercitationem aspernatur
            </Text>
          </Box>
          <Box mb={10} >
            <Flex mb={4} align="center">
              <Image src={mail} alt="Email Icon" width='80px' mr={4} border="solid #C5990D 1px" p="15px" />
              <Box ml="3%">
                <Text fontWeight="bold" m="0" mb="10px" color="#C5990D">
                  Email
                </Text>
                <Flex display="flex" flexDirection="column" m="0">
                  <Link href="mailto:ejemplo@gmail.com" color="white" textDecoration="none">
                    ejemplo@gmail.com
                  </Link>
                  <Link href="mailto:ayuda@gmail.com" color="white" textDecoration="none">
                    ayuda@gmail.com
                  </Link>
                </Flex>
              </Box>
            </Flex>
            <Flex mb={4} align="center">
              <Image src={telefono} alt="Telefono Icon" width='80px' mr={4} border="solid #C5990D 1px" p="15px" />
              <Box ml="3%">
                <Text fontWeight="bold" color="#C5990D">
                  Telefono
                </Text>
                <Text color="white">123 456 7890</Text>
                <Text color="white">123 456 0987</Text>
              </Box>
            </Flex>
            <Flex mb={4} align="center">
              <Image src={ubicacion} alt="Ubicacion Icon" width='80px' mr={4} border="solid #C5990D 1px" p="15px" />
              <Box ml="3%">
                <Text fontWeight="bold" color="#C5990D">
                  Direccion
                </Text>
                <Text color="white">Av. 9 de Julio s/n, C1043</Text>
                <Text color="white">Cdad. Autónoma de Buenos Aires, Argentina</Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text color="white" mb={4} >Visita mis perfiles de las redes sociales</Text>
            <Flex>
              <Link href="https://www.facebook.com/?locale=es_LA">
                <Image src={facebook} alt="Facebook" boxSize="40px" mr={4} />
              </Link>
              <Link href="https://es.linkedin.com/company/linkedin/jobs">
                <Image src={linkedin} alt="LinkedIn" boxSize="40px" mr={4} />
              </Link>
              <Link href="https://x.com">
                <Image src={x} alt="X" boxSize="40px" mr={4} />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image src={instagram} alt="Instagram" boxSize="40px" mr={4} />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;

