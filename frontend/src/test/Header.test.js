import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('render header', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  const headerLogoTextElement = screen.getByText(/Product Listings App/i);
  expect(headerLogoTextElement).toBeInTheDocument();
});

test('render drawer', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  const button = screen.queryByRole('button');
  fireEvent.click(button)
  const drawerListItemElement = screen.getByText(/Add Product/i);
  expect(drawerListItemElement).toBeInTheDocument();
});