import {render, screen} from '@testing-library/react';
import LoadingWrapper from '../components/LoadingWrapper';

test('render wrapper with child', () => {
  render(<LoadingWrapper><div>Hello World</div></LoadingWrapper>);
  const childElement = screen.getByText(/Hello World/i);
  expect(childElement).toBeInTheDocument();
});