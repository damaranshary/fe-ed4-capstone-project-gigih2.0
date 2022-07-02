import { Center, Image, Box, IconButton, useBreakpointValue, Text, Stack, Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BooksDataProps } from '../../../types/types';
import { BreadcrumbForAdventureBookContent, BreadcrumbForNatureBookContent } from '../../breadcrumb';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { fetchBookContentFromID } from '../../../api-call/fetchJSONData';


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
    const natureBooksData = useAppSelector((state: RootState) => state.natureBooks.value);
    const adventureBooksData = useAppSelector((state: RootState) => state.adventureBooks.value);
    const natureBooksDataID = useAppSelector((state: RootState) => state.natureBooks.jsonData.id);
    const adventureBooksDataID = useAppSelector((state: RootState) => state.adventureBooks.jsonData.id);
    const mergedID = natureBooksDataID.concat(adventureBooksDataID);
    const mergedData = natureBooksData.concat(adventureBooksData);

    useEffect(() => {
        const getBookContentFromID = () => {
            const filteredContentData = mergedData.filter(content => content.id === bookID);
            if (filteredContentData.length !== 0) {
                setContentData(filteredContentData[0]);
            }
            else {
                if (mergedID.includes(bookID!)) {
                    fetchBookContentFromID(bookID).then(res => setContentData(res));
                } 
                else {
                    return (
                        <Center mt={24}><Text size='xl'>Konten Tidak Ditemukan</Text></Center>
                    );
                }
            }
        }
        mergedData !== undefined && getBookContentFromID();
        // eslint-disable-next-line 
    }, [bookID])

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', sm: '300px', md: '300px' });
    const side = useBreakpointValue({ base: '10%', sm: '10px', md: '10px' });

    return (
        <Container minH='90vh' maxW='100vh' mb={10}>
            <Center>
                {contentData !== undefined && contentData.category === 'adventure' &&
                    <BreadcrumbForAdventureBookContent
                        currentPage={contentData.name} />}
                {contentData !== undefined && contentData.category === 'nature' &&
                    <BreadcrumbForNatureBookContent
                        currentPage={contentData.name} />}
            </Center>
            <Center mt={8}>
                <Stack direction='column' >
                    <Center >
                        <Text fontSize='3xl' as='h2' mb={5}>{contentData?.name}</Text>
                    </Center>
                    <Box
                        position={'relative'}
                        maxH='full'
                        maxW='4xl'
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
                                    <Center><Image src={imageURL} alt={imageURL} mb={4} borderRadius='xl' /></Center>
                                    <Stack direction='column'>
                                        <Box><Center><Text fontSize='sm'>Halaman {index + 1} dari {contentData?.content.length}</Text></Center>
                                            <Text mt={2} textAlign={['left', 'center']} fontSize='xl' >{description}</Text>
                                        </Box>
                                    </Stack>
                                </>
                            ))}

                        </Slider>
                    </Box>
                </Stack>
            </Center>
        </Container>
    );

}

export default BookContent;