import { Center, Image, Box, IconButton, useBreakpointValue, Text, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import axios from 'axios';
import { VocabsDataProps } from '../../../types/types';
import { BreadcrumbForVocabContent } from '../../breadcrumb';
import { Wrap, WrapItem} from '@chakra-ui/react'


const VocabContent = () => {
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [slider, setSlider] = useState<Slider | null>(null);
    const params = useParams();
    const vocabID = params?.id;
    const [data, setData] = useState<VocabsDataProps>();

    useEffect(() => {
        getVocabContentFromID().then((res) => setData(res));
    }, [])

    const getVocabContentFromID = async (): Promise<VocabsDataProps> => {
        const data: any =
            await axios
                .get(`/data/vocab/${vocabID}.json`)
                .catch(err => console.log(err));
        return data.data;
    }

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    return (
        <>
            <Center>
                {data !== undefined && data.category === 'vocabs' &&
                    <BreadcrumbForVocabContent
                        currentPage={data.name} />}
                {data !== undefined && data.category === 'funfact' &&
                    <BreadcrumbForVocabContent
                        currentPage={data.name} />}
            </Center>
            <Center mt={8}>
                <Stack direction='column'>
                    <Center >
                        <Text fontSize='3xl' as='h2' mb={8}>{data?.name}</Text>
                    </Center>
                    <Box
                        position={'relative'}
                        height={'full'}
                        width={'800px'}
                        overflow={'hidden'}>
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="teal"
                            borderRadius="full"
                            position="absolute"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}>
                            <BiLeftArrowAlt />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="teal"
                            borderRadius="full"
                            position="absolute"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickNext()}>
                            <BiRightArrowAlt />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={(slider) => setSlider(slider)}>
                            {data?.content.map(({ imageURL, description }, index) => (
                                <>
                                    <Wrap spacing='30px' justify='center' className="vocab">
                                        <WrapItem>
                                            <Center>
                                            <Image src={imageURL} alt={imageURL} mb={4} borderRadius='xl' width="300px"/>
                                            </Center>
                                        </WrapItem>
                                    </Wrap>
                                </>
                            ))}
                        </Slider>
                    </Box>
                </Stack>
            </Center>
        </>
    );

}

export default VocabContent;