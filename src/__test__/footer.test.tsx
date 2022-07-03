import Footer from "../component/footer"
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react';

test('loads and displays footer component', () => {
  render(
    <ChakraProvider>
      <Footer />
    </ChakraProvider>)

  const footerText = screen.getByText('© 2022 Copyright Baca Merdeka. All rights reserved. Team FE-ED4');
  expect(footerText).toBeInTheDocument();

})