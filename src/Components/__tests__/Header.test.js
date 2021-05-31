import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import Header from '../Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, faGithubAlt, faLinkedinIn, faEnvelope, faEnvelopeOpen, faPhone);

describe("Header", () => {
  it("loads without crashing", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Welcome to Foto Album!")).toBeInTheDocument;
  });
})