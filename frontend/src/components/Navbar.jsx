import {
  Box,
  Flex,
  Avatar,
  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,


  useDisclosure,

  Stack,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { useEffect, useState } from 'react';
const Links = [
  { name: 'Dashboard', path: '/' }, // Define routes and names
  { name: 'Projects', path: '/projects' },
  { name: 'Quiz', path: '/quiz' },
];



const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation(); // Get the current route
  const [activeLink, setActiveLink] = useState('/'); // Initialize with the default route
  const updateActiveLink = () => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  };

  
  useEffect(() => {
    updateActiveLink();
  }, [location]);

  return (
    <>
      <Box bg={'transparent'}  px={{lg:'32', md: '4', base:'4'}} position={'absolute'} zIndex={'100'} top={'0'} right={'0'} left={'0'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineCloseCircle fontSize={'40'} /> : <GiHamburgerMenu fontSize={'40'}/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box backgroundColor={'#fff'} p={'2'} borderRadius={'2xl'}>Logo</Box>
            <HStack as={'nav'} fontWeight={'bold'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  backgroundColor: activeLink === link.path ? '#C1E836' : 'transparent',
                  color: activeLink === link.path ? 'black' : '#fff',
                  padding: activeLink === link.path? '5px': 'auto',
                  borderRadius: activeLink === link.path? '20px': '0px',
                }}
                
              >
                {link.name}
              </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
            
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
<Box pb={4} display={{ md: 'none' }}>
<Stack as={'nav'} spacing={4}>
{Links.map((link) => (
  <Link
  key={link.path}
  to={link.path}
  style={{
    textDecoration: 'none',
    backgroundColor: activeLink === link.path ? '#C1E836' : 'transparent',
    color: activeLink === link.path ? 'black' : '#fff',
  }}
  p={2}
  rounded={'md'}
  _hover={{
    textDecoration: 'none',
    backgroundColor: '#C1E836',
    color: 'black',
  }}

>
  {link.name}
</Link>

))}
</Stack>
</Box>
) : null}
      </Box>
    </>
  )
}


export default Navbar