import { rest } from 'msw';
import { setupServer } from 'msw/node';
import NatureComponent from "../component/nature";
import { render, screen } from "@testing-library/react";
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

test('loads and displays nature Component', async () => {
  render(
    <ChakraProvider>
      <Provider store={store} >
        <BrowserRouter>
          <NatureComponent
            booksList={['N001', 'N002', 'N003']}
          />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>)

  await screen.findByRole('heading')

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Alam');

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