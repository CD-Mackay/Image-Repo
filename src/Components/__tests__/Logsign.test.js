import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import Logsign from '../Logsign';

describe("Logsign", () => {
  it("loads without crashing", () => {
    const { getByText } = render(<Logsign />);
    expect(getByText("Login!")).toBeInTheDocument;
  });

  it("changes to signup when signup is clicked", () => {
    const { getByText, getByPlaceholderText } = render(<Logsign />);
    fireEvent.click(getByText("New Here? Sign up!"));
    expect(getByPlaceholderText("pick a secure password")).toBeInTheDocument;
  });

  it("cycles between login and signup forms", () => {
    const { getByText, getByPlaceholderText } = render(<Logsign />);
    fireEvent.click(getByText("New Here? Sign up!"));
    expect(getByPlaceholderText("pick a secure password")).toBeInTheDocument;
    fireEvent.click(getByText("Click here to Login!"));
    expect(getByPlaceholderText("enter username")).toBeInTheDocument;
  });
});