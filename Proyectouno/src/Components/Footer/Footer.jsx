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

  return (
    <Box as="section" bg="gray.800" color="white" py={10} id="contacto">
      <Box textAlign="center" mb={10}>
        <Heading  mt="4%" p="0" fontFamily="acumin-pro, sans-serif" mb='2%' fontWeight="700" fontStyle="normal" fontSize="60px" >
          <Text as="span" color="#269c36">Suscribite</Text> A Las Novedades
        </Heading>
        <Text mb='2%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ducimus! Asperiores deserunt nulla totam ut earum?</Text>
        <Box mt={6} align='center'>
          <form onSubmit={e => e.preventDefault()}>
            <Flex width='40%'  >
              <Input type="email" placeholder="Ingrese su email" bg="white" color="black" borderTopLeftRadius="30px" borderBottomLeftRadius="30px" width="70%" border='none' p={4}
              />
              
              <Button onClick={validarFormulario} bg="#269c36" color="white" borderTopRightRadius="30px" borderBottomRightRadius="30px" width="30%" border='none' p={15}
              >
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
        <Heading  fontFamily="acumin-pro, sans-serif" mb='2%' mt='5%' fontWeight="700" fontStyle="normal" fontSize="60px" >
          Ponte En Con<Text as="span" color="#269c36">tacto Conmigo</Text>
        </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam quae vero, Quibusdam odit molestia</Text>
      </Box>
      <Flex justify="space-between" mb={10}>
        <Box width="35%" ml='15%' >
          <form onSubmit={e => e.preventDefault()}>
            <Heading size="md" mb={4} textAlign="left" color="#C5990D" fontFamily='Roboto Condensed' fontWeight='normal'>
              ENVIAME UN MENSAJE
            </Heading>
            <VStack spacing={4} align="flex-start">
              <Box width="100%">
                <Input id="name" width="70%" mt='30px' py='10px' placeholder="Tu Nombre" value={formState.name} onChange={handleInputChange} bg="gray.700" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray.500' }}
                />
                {errors.name && (
                  <Text color="red" mt={2}>
                    {errors.name}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input id="email"  width="70%" mt='30px' py='10px' placeholder="Tu Email" value={formState.email} onChange={handleInputChange} bg="gray.700" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray.500' }}
                />
                {errors.email && (
                  <Text color="red" mt={2}>
                    {errors.email}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input id="tema" width="70%" mt='30px' py='10px' placeholder="El Tema De Su Mensaje" value={formState.tema} onChange={handleInputChange} bg="gray.700" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray' }}
                />
                {errors.tema && (
                  <Text color="red" mt={2}>
                    {errors.tema}
                  </Text>
                )}
              </Box>
              <Box width="100%">
                <Input as="textarea"  width="70%" mt='30px' py='10px'  id="mensaje" placeholder="Escribe Tu Mensaje" value={formState.mensaje} onChange={handleInputChange} bg="gray.700" border="1px" borderColor="gray.600" _placeholder={{ color: 'gray.500' }} resize="vertical" minHeight="20vh"
                />
                {errors.mensaje && (
                  <Text color="red" mt={2}>
                    {errors.mensaje}
                  </Text>
                )}
              </Box>
              <Button mt='10px' onClick={validarFormulario} bg="#269c36" color="white" width="30%" alignSelf="flex-start" borderRadius='30px' p='15px' fontFamily='Roboto Condensed' border='none'>
                CONTACTAME
              </Button>
            </VStack>
          </form>
        </Box>
        <Box width="50%">
          <Box mb={10}>
            <Heading size="md" mb={4} color="#C5990D" fontFamily='Roboto Condensed' fontWeight='normal' fontSize='25px'>
              CONTACT INFORMATION
            </Heading>
            <Text width='60%' lineHeight='200%'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quia exercitationem aspernatur
            </Text>
          </Box>
          <Box mb={10}>
            <Flex mb={4} align="center">
              <Image src={mail} alt="Email Icon" boxSize="50px" mr={4}  border='solid #C5990D 1px' p='15px'/>
              <Box ml='3%' >
                <Text fontWeight="bold" m='0' mb='10px' color='#C5990D'>Email</Text>
                <Flex display='flex' flexDirection='column' m='0'>
                    <Link href="mailto:ejemplo@gmail.com" color='white' textDecoration='none'>ejemplo@gmail.com</Link>
                    <Link href="mailto:ayuda@gmail.com" color='white' textDecoration='none'>ayuda@gmail.com</Link>
                </Flex>
              </Box>
            </Flex>
            <Flex mb={4} align="center">
              <Image src={telefono} alt="Telefono Icon" boxSize="50px" mr={4} border='solid #C5990D 1px' p='15px'/>
              <Box ml='3%'>
                <Text fontWeight="bold" color='#C5990D'>Telefono</Text>
                <Text>123 456 7890</Text>
                <Text>123 456 0987</Text>
              </Box>
            </Flex>
            <Flex mb={4} align="center">
              <Image src={ubicacion} alt="Ubicacion Icon" boxSize="50px" mr={4} border='solid #C5990D 1px' p='15px' />
              <Box ml='3%'>
                <Text fontWeight="bold" color='#C5990D'>Direccion</Text>
                <Text>Av. 9 de Julio s/n, C1043</Text>
                <Text>Cdad. Autónoma de Buenos Aires, Argentina</Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text mb={4}>Visita mis perfiles de las redes sociales</Text>
            <Flex>
              <Link href="#">
                <Image src={facebook} alt="Facebook" boxSize="70%" mr={4} />
              </Link>
              <Link href="#">
                <Image src={linkedin} alt="LinkedIn" boxSize="70%" mr={4} />
              </Link>
              <Link href="#">
                <Image src={x} alt="X" boxSize="70%" mr={4} />
              </Link>
              <Link href="#">
                <Image src={instagram} alt="Instagram" boxSize="70%" mr={4} />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;