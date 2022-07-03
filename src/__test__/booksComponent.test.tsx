import { rest } from 'msw';
import { setupServer } from 'msw/node';
import BooksComponent from "../component/books";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { testBooksData } from './data/testBooksData';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

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

test('loads and displays Books Component', async () => {
    render(
        <ChakraProvider>
            <BrowserRouter>
                <BooksComponent
                    coverImageURL={testBooksData.coverImageURL}
                    content={testBooksData.content}
                    name={testBooksData.name}
                    id={testBooksData.id}
                    key={testBooksData.id}
                    category={testBooksData.category}
                    author={testBooksData.author}
                    description={testBooksData.description}
                />
            </BrowserRouter>
        </ChakraProvider>)

    await waitFor(() => screen.getByRole('img'))

    const heading = screen.getByRole('heading');
    const buttonToRead = screen.getByRole('link');
    const textForAuthor = screen.getByText(testBooksData.author);
    const textForDescription = screen.getByText(testBooksData.description);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(testBooksData.name);

    expect(buttonToRead).toBeInTheDocument();
    userEvent.click(buttonToRead);
    expect(buttonToRead).toHaveTextContent('Baca');

    expect(textForAuthor).toBeInTheDocument();
    expect(textForDescription).toBeInTheDocument();
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