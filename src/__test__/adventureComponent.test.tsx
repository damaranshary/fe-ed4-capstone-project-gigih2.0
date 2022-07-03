import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AdventureComponent from "../component/adventure";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { testBooksData } from './data/testBooksData';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const server = setupServer(
  rest.get('/data/book/:id', (req, res, ctx) => {
    return res(ctx.json(
      testBooksData
    ))
  })
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('loads and displays adventures Component', async () => {
  render(
    <ChakraProvider>
      <Provider store={store} >
        <BrowserRouter>
          <AdventureComponent
            booksList={['A001', 'A002', 'A004']}
          />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>)

  await waitFor(() => screen.getByRole('heading'))

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Petualangan');

})

test('handles server error', async () => {
  server.use(
    // override the initial "GET /greeting" request handler
    // to return a 500 Server Error
    rest.get('/data/book/:id', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )
})





export { }