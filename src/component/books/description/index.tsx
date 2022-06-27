import {
    Container,
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    VStack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useParams } from "react-router-dom";
import funFactData from "../../../data/fun-fact";
import legendsData from "../../../data/legends";


const BookDescription = () => {
    const params = useParams();
    const bookID = params?.id;
    const dataFromId = legendsData.filter(item => item.id === bookID)
    return (
        <>
            {dataFromId.map((item) => {
                <div>
                    <Image src={item.coverImageURL} alt={item.name} />
                </div>
            })}
            <Container maxW='xl' centerContent mt={10}>

                <Center py={6}>
                    <Stack
                        borderWidth="1px"
                        borderRadius="lg"
                        w={{ sm: '100%', md: '1200px' }}
                        height={{ sm: '100%', md: 'full' }}
                        direction={{ base: 'column', md: 'row' }}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        padding={4}>
                        <Flex flex={1} bg="blue.200">
                            <Image
                                objectFit="cover"
                                boxSize="100%"
                                src={legendsData[0].coverImageURL}
                            />
                        </Flex>
                        <Stack
                            flex={1}
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            p={1}
                            pt={2}>
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                {bookID}
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @author
                            </Text>
                            <Text
                                textAlign={'center'}
                                color={useColorModeValue('gray.700', 'gray.400')}
                                px={3}>
                                Full Description of the Book HUEHUEHUEHEUHEUEHEUHEUEH
                            </Text>
                            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #art
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #photography
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #music
                                </Badge>
                            </Stack>

                            <Stack
                                width={'100%'}
                                mt={'2rem'}
                                direction={'row'}
                                padding={2}
                                justifyContent={'space-between'}
                                alignItems={'center'}>

                                <Button
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    _focus={{
                                        bg: 'blue.500',
                                    }}>
                                    <Link as={ReactRouterLink} to={'1'}>
                                        Read
                                    </Link>
                                </Button>

                            </Stack>
                        </Stack>
                    </Stack>
                </Center>
            </Container>
        </>
    )
}

export default BookDescription;