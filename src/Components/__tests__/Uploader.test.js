import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import Uploader from '../Uploader';

describe("Uploader", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Uploader />);
    expect(getByText("Choose File")).toBeInTheDocument;
  });

  it("calls the upload function when clicked", () => {
    const upload = jest.fn();
    const { getByText } = render(<Uploader upload={upload} />);
    fireEvent.click(getByText("Upload"));
    expect(jest.fn).toHaveBeenCalled;
  })
});