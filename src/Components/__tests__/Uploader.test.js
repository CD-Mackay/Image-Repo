import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import Uploader from '../Uploader';

describe("Uploader", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Uploader />);
    expect(getByText("Choose File")).toBeInTheDocument;
  })
})