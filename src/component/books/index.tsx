import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Icon,
    chakra,
    Button,
    Center,
    Tooltip,
    Link,
    Heading
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';

import { BooksDataProps } from '../../types/types';

const Books = ({ isNew, imageURL, name, id, category }: BooksDataProps) => {
    const linkToDescription = '/read/' + category + '/' + id;
    return (
        <Flex p={2} w="400px" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                    src={imageURL.cover}
                    alt={`Picture of ${name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Box
                                fontSize="xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                            >
                                <Heading as='h3' size='md'>{name}</Heading>
                            </Box>
                            <Link as={ReactRouterLink} to={linkToDescription}>
                                <Button
                                    mt="4"
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    size='lg'
                                    w='300px'
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    _focus={{
                                        bg: 'blue.500',
                                    }}>
                                    Read
                                </Button>
                            </Link>

                        </Flex>
                    </Center>

                </Box>
            </Box>
        </Flex>
    )
};


export default Books;