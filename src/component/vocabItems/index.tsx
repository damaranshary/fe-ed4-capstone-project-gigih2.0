import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Heading,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { VocabsDataProps } from '../../types/types';

const Vocabs = ({ coverImageURL, name, id, category, description }: VocabsDataProps) => {
    const linkToDescription = `/learn/${category}/${id}`
    return (
        <Flex p={2} maxW="6xl" alignItems="center" justifyContent="center" mt={8} data-testid="vocabs">
            <Box
                maxW="xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                    src={coverImageURL}
                    alt={`Picture of ${name}`}
                    roundedTop="lg"
                    width="200px"
                    marginStart='auto'
                    marginEnd='auto'
                    mt={4}
                />
                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Box
                                fontSize="xl"
                                fontWeight="semibold"
                                lineHeight="tight"
                            >
                                <Heading as='h3' size='md' textAlign='center'>{name}</Heading>
                                <Text fontSize='xs' textAlign='center' mt={2}>{description}</Text>
                            </Box>
                            <Center>
                                <Button
                                    as={ReactRouterLink}
                                    to={linkToDescription}
                                    mt={6}
                                    mb={4}
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'teal'}
                                    color={'white'}
                                    size='lg'
                                    w='300px'
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'teal',
                                    }}
                                    _focus={{
                                        bg: 'teal',
                                    }}>
                                    Learn
                                </Button>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </Flex>
    )
};


export default Vocabs;