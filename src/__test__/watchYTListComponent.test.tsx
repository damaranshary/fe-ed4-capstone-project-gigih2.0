import { rest } from 'msw';
import { setupServer } from 'msw/node';
import EmbedYoutubeVideo from "../component/watch/embedYTVideo";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test('loads and displays Youtube Video List Component', async () => {
  render(
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <EmbedYoutubeVideo
            coverImageURL={testVideosData.coverImageURL}
            embedVideoURL={testVideosData.embedVideoURL}
            name={testVideosData.name}
            id={testVideosData.id}
            key={testVideosData.id}
            author={testVideosData.author}
            description={testVideosData.description}
          />
        </BrowserRouter>
      </Provider>
    </ChakraProvider >)

  await screen.findByRole('img')

  const heading = screen.getByRole('heading');
  const buttonToWatch = screen.getByRole('link');
  const textForAuthor = screen.getByText('dari ' + testVideosData.author);
  const textForDescription = screen.getByText(testVideosData.description);

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(testVideosData.name);

  expect(buttonToWatch).toBeInTheDocument();
  userEvent.click(buttonToWatch);
  expect(buttonToWatch).toHaveTextContent('Tonton');

  expect(textForAuthor).toBeInTheDocument();
  expect(textForDescription).toBeInTheDocument();
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