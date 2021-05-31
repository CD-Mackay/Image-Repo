import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import ImageList from '../ImageList';

describe("ImageList", () => {
  it("Renders without crashing", () => {
    const { getByTestId } = render(<ImageList />);
    expect(getByTestId("image-list-wrapper")).toBeInTheDocument;
  });
})