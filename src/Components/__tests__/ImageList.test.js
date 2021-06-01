import React from 'react';
import { fireEvent, render, getByText, getByPlaceholderText, cleanup } from '@testing-library/react';
import ImageList from '../ImageList';

describe("ImageList", () => {

  const images = [
    {
    id: 1,
    name: "bitefish.gif",
    user_id: 1,
    file_path: "/Users/connormackay/practice/image-repo/public/",
    date_added: "1621356030051",
    favourite: false
    },
    {
    id: 2,
    name: "compassprofile.jpg",
    user_id: 1,
    file_path: "/Users/connormackay/practice/image-repo/public/",
    date_added: "1621356035865",
    favourite: false
    }];

  it("Renders without crashing", () => {
    const { getByTestId } = render(<ImageList />);
    expect(getByTestId("image-list-wrapper")).toBeInTheDocument;
  });

  it("renders the sort by favourites button", () => {
    const { getByText } = render(<ImageList />);
    expect(getByText("View Favourites")).toBeInTheDocument;
  });

  it("Renders the correct images and their names", () => {
    const { getByText } = render(<ImageList display={images} />);
    expect(getByText("bitefish")).toBeInTheDocument;
  })
});