import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Links = ['Dashboard', 'Projects', 'Quiz']

const NavLink = ({children}) => {
  

  return (
    <Box
      as="a"
      px={2}
      py={1}
      color={'#fff'}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: '#C1E836',
        color: 'black'
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
                <NavLink key={link}>{link}</NavLink>
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
<NavLink key={link}>{link}</NavLink>
))}
</Stack>
</Box>
) : null}
      </Box>
    </>
  )
}


export default Navbar