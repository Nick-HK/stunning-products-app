import {render, screen} from '@testing-library/react';
import SimpleBreadcrumbs from '../components/SimpleBreadcrumbs';
import { BrowserRouter } from 'react-router-dom';


test('render breadcrumbs', () => {
  render(<BrowserRouter><SimpleBreadcrumbs defaultData={{}} /></BrowserRouter>);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
