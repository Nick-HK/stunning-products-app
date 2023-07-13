import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer', () => {
  render(<Footer />);
  const footerTextElement = screen.getByText(/Nick Ng/i);
  expect(footerTextElement).toBeInTheDocument();
});
