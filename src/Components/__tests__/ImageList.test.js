import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import ImageList from '../ImageList';

describe("ImageList", () => {
  it("Renders without crashing", () => {
    const { getByTestId } = render(<ImageList />);
    expect(getByTestId("image-list-wrapper")).toBeInTheDocument;
  });

  it("renders the sort by favourites button", () => {
    const { getByText } = render(<ImageList />);
    expect(getByText("View Favourites")).toBeInTheDocument;
  });

  it("Renders the correct images and their names", () => {
    const { getByText } = render(<ImageList />);
  })
});