import React from "react";
import HeroSection from "../../component/heroSection/HeroSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import Btn from "./button";
import { Link } from "react-router-dom";

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
      title: "Kepiting untuk makan malam",
      text: "Kepiting bakau banyak dijumpai di berbagai hutan bakau. Kepiting memiliki sepasang lengan sepit dan empat pasang kaki yang kokoh.",
      image: "images/kepiting.jpg",
    },
    {
      title: "Enggang yang istimewa",
      text: "Cerita Enggang yang Istimewa ini terinspirasi dari cerita rakyat Kalimantan tentang persahabatan manusia dan burung enggang badak yang bernama Latin Buceros rhinoceros. Kisah itu menceritakan peran enggang yang secara tidak langsung menjaga kelestarian hutan.",
      image: "images/enggang.jpg",
    },
    {
      title: "Cahaya Bulan diatas Laut",
      text: "Nihla tersenyum hangat. Kemudian, Nihla menari di dalam air, menyentuh buih ombak, mengarahkan pandangannya yang menenangkan ke puncak ombak yang ganas, dan menenangkan lautan yang marah.",
      image: "images/cahaya-bulan.jpg",
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
              <Container size="container.lg" height="800px" width={"full"} position="relative">
                <Stack spacing={4} w={"full"} maxW={"lg"} position="absolute" top="50%" transform="translate(0, -50%)">
                  <Heading color="black" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="ghostwhite">
                    {card.text}
                  </Text>
                  <Link to="/read">
                    <Btn />
                  </Link>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}
