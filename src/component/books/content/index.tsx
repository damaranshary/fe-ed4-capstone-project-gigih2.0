import { Button, Container, Center, Image, Box, IconButton, useBreakpointValue, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom'
import legendsData from '../../../data/legends';
import axios from 'axios';
import { BooksDataProps } from '../../../types/types';
import { BreadcrumbForLegendsContent, BreadcrumbForFunFactContent } from '../../breadcrumb';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';


const BookContent = () => {
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
    const bookID = params?.id;
    const [contentData, setContentData] = useState<BooksDataProps>();
    const funFactsData = useAppSelector((state: RootState) => state.funFactData.value);
    const legendsData = useAppSelector((state: RootState) => state.legendsData.value);
    const mergedData = funFactsData.concat(legendsData);

    useEffect(() => {
        getBookContentFromID();
    }, [])

    const fetchBookContentFromID = async (): Promise<BooksDataProps> => { //will run this if there is no data in redux state
        const data: any =
            await axios
                .get(`/data/${bookID}.json`)
                .catch(err => console.log(err));
        return data.data;
    }

    const getBookContentFromID = () => {
        const filteredContentData = mergedData.filter(content => content.id === bookID);
        filteredContentData !== undefined ? setContentData(filteredContentData[0]) : fetchBookContentFromID().then(res => setContentData(res)) ;
    }

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    return (
        <>
            <Center>
                {contentData !== undefined && contentData.category == 'legends' &&
                    <BreadcrumbForLegendsContent
                        currentPage={contentData.name} />}
                {contentData!== undefined && contentData.category == 'fun fact' &&
                    <BreadcrumbForFunFactContent
                        currentPage={contentData.name} />}
            </Center>
            <Center mt={8}>
                <Stack direction='column' >
                    <Center >
                        <Text fontSize='3xl' as='h2' mb={5}>{contentData?.name}</Text>
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
                            colorScheme="messenger"
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
                            colorScheme="messenger"
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
                            {contentData?.content.map(({ imageURL, description }, index) => (
                                <>
                                    <Image src={imageURL} alt={imageURL} mb={4} borderRadius='xl' />
                                    <Stack direction='column'>
                                        <Text fontSize='sm'>Halaman {index + 1} dari {contentData?.content.length}</Text>
                                        <Text fontSize='xl'>{description}</Text>
                                    </Stack>
                                </>
                            ))}

                        </Slider>
                    </Box>
                </Stack>
            </Center>
        </>
    );

}

export default BookContent;