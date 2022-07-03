import NotFound404 from "../pages/404";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


test('loads and displays 404 pages', async () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <NotFound404 />
      </BrowserRouter>
    </ChakraProvider>)
  const img = screen.getByRole('img');
  
  await waitFor(() => img)

  const heading = screen.getByRole('heading');

  const buttonToHome = screen.getByRole('button');

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Nothing found here code: 404');

  expect(img).toBeInTheDocument();

  expect(buttonToHome).toBeInTheDocument();
  userEvent.click(buttonToHome);
})