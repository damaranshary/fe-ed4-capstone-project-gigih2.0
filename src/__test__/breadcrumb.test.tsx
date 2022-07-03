import { BreadcrumbForAdventureBookContent } from "../component/breadcrumb"
import { testBooksData } from './data/testBooksData';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";


test('loads breadcrumb component', () => {
  render(
    <BrowserRouter>
      <BreadcrumbForAdventureBookContent currentPage={testBooksData.name} />
    </BrowserRouter>
  )

  const linkToHome = screen.getByText('Home');
  const linkToRead = screen.getByText('Read');
  const linkToPetualangan = screen.getByText('Petualangan');
  const linkToCurrentPage = screen.getByText(testBooksData.name);

  expect(linkToHome).toBeInTheDocument();
  userEvent.click(linkToHome);

  expect(linkToRead).toBeInTheDocument();
  userEvent.click(linkToRead);

  expect(linkToPetualangan).toBeInTheDocument();
  userEvent.click(linkToPetualangan);

  expect(linkToCurrentPage).toBeInTheDocument();
  userEvent.click(linkToCurrentPage);

})