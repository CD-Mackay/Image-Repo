import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
  it("loads without crashing", () => {
    const { getByText } = render(<Header />);
  })
})