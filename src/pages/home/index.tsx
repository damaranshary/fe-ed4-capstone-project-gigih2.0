import React from "react";
import HeroSection from "../../component/heroSection/HeroSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import Footer from "../../component/footer";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "images/enggang.jpg",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "images/cahaya-bulan.jpg",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "images/kepiting.jpg",
    },
  ];

  return (
    <>
      <Box position={"relative"} height={"700px"} width={"full"} overflow={"hidden"}>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <IconButton aria-label="left-arrow" variant="ghost" position="absolute" left={side} top={top} transform={"translate(0%, -50%)"} zIndex={2} onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>

        <IconButton aria-label="right-arrow" variant="ghost" position="absolute" right={side} top={top} transform={"translate(0%, -50%)"} zIndex={2} onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box key={index} height={"6xl"} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${card.image})`}>
              <Container size="container.lg" height="700px" position="relative">
                <Stack spacing={6} w={"full"} maxW={"lg"} position="absolute" top="50%" transform="translate(0, -50%)">
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>{card.title}</Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Footer />
    </>
  );
}
