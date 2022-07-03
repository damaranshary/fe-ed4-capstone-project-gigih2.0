import { rest } from 'msw';
import { setupServer } from 'msw/node';
import BookContainer from "../component/books/container"
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { testBooksData } from './data/testBooksData';
import { ChakraProvider } from '@chakra-ui/react';

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

test('loads and displays Book content container', async () => {
    render(
        <ChakraProvider>
            <BookContainer
                content={testBooksData.content}
                title={testBooksData.name}
            />
        </ChakraProvider>)

    await screen.findByRole('img');

    const textForDescriptionPerPages = screen.getByText(testBooksData.content[0].description);
    const buttonPrevAndNextPage = screen.getByRole('button');
    const textForPagesNumber = screen.getByText(/1 dari/);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(textForPagesNumber).toBeInTheDocument();

    expect(textForDescriptionPerPages).toBeInTheDocument();
    expect(textForDescriptionPerPages).toHaveTextContent(testBooksData.content[0].description);

    expect(buttonPrevAndNextPage).toBeInTheDocument();
    userEvent.click(buttonPrevAndNextPage);
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

