import { render, screen } from '@testing-library/react';
import App from '../App';

test('render root app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Product Listings App/i);
  expect(linkElement).toBeInTheDocument();
});
