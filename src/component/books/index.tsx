import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Icon,
    chakra,
    Tooltip,
    Link
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';

import { BooksDataProps } from '../../types/types';

const Books = ({ isNew, imageURL, name, id, category }: BooksDataProps) => {
    const bookNameWithLowerCase = name.toLowerCase();
    const link = '/read/' + category + '/' + bookNameWithLowerCase?.replaceAll(' ', '-');
    return (
        <Flex p={2} w="300px" alignItems="center" justifyContent="center">
            <Box
                maxW="xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={imageURL}
                    alt={`Picture of ${name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                        >
                            <Link as={ReactRouterLink} to={link}>{name}</Link>
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                </Box>
            </Box>
        </Flex>
    )
};


export default Books;