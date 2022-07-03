import { rest } from 'msw';
import { setupServer } from 'msw/node';
import EmbedYoutubeVideoContent from "../component/watch/embedYTVideo/content"
import { render, screen, waitFor } from "@testing-library/react";
import { testVideosData } from './data/testVideosData';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const server = setupServer(
  rest.get('/data/video/:id', (req, res, ctx) => {
    return res(ctx.json(
      testVideosData
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

test('loads and displays embedYoutube Vid Component', async () => {
  render(
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <EmbedYoutubeVideoContent />
        </BrowserRouter>
      </Provider>
    </ChakraProvider >)

  await waitFor(() => screen.getByRole('heading'))

  const heading = screen.getByRole('heading');
  const textForAuthor = screen.getByText(/Karya/i);

  expect(heading).toBeInTheDocument();
  expect(textForAuthor).toBeInTheDocument();
  expect(textForAuthor).toHaveTextContent('Karya')
})

test('handles server error', async () => {
  server.use(
    // override the initial "GET /greeting" request handler
    // to return a 500 Server Error
    rest.get('/data/video/:id', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )
})





export { }