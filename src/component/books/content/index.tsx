import { Button, Container, Center, Image, Box, IconButton, useBreakpointValue, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import legendsData from '../../../data/legends';



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

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    return (
        <Center mt={10}>
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
                        {legendsData[0].content.map(({imageURL, description}, index) => (
                            <>
                                <Image src={imageURL} alt={imageURL} />
                                {index}
                                <p>{description}</p>
                            </>
                        ))}

                    </Slider>
                </Box>
        </Center>
    );

}

export default BookContent;