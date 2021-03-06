import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Heading,
    Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'

import { VideoDataProps } from '../../../types/types';

const EmbedYoutubeVideo = ({ coverImageURL, name, id, description, author }: VideoDataProps) => {
    const linkToContent = `/watch/${id}`
    return (
        <Flex p={2} maxW="6xl" justifyContent="center" alignItems="center" mt={8}>
            <Box
                maxW="2xl"
                minH='360px'
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Center>
                    <Image
                        src={coverImageURL}
                        alt={`Picture of ${name}`}
                        rounded="lg"
                        maxH='150px'
                        mt={6}
                    />
                </Center>
                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Center>
                                <Box
                                    minH='120px'
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    lineHeight="tight"
                                >
                                    <Heading size='md'>{name}</Heading>
                                    <Text color='gray.500' fontSize='sm' mt={1}>dari {author}</Text>
                                    <Text fontSize='xs' mt={2} noOfLines={[1, 2, 3]}>{description}</Text>
                                </Box>
                            </Center>
                            <Center>
                                <Button
                                    as={ReactRouterLink}
                                    to={linkToContent}
                                    mt={6}
                                    mb={4}
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'red.400'}
                                    color={'white'}
                                    size='lg'
                                    w='200px'
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'red.500',
                                    }}
                                    _focus={{
                                        bg: 'red.500',
                                    }}>
                                    Tonton
                                </Button>
                            </Center>
                        </Flex>
                    </Center>

                </Box>
            </Box>
        </Flex>
    )
};


export default EmbedYoutubeVideo;