import {render, screen} from '@testing-library/react';
import YesNoDialog from '../components/YesNoDialog';


test('render yes no dialog', () => {
  render(<YesNoDialog bOpen sDialogMsg={'Hello World'}/>);
  const dialogMsgElement = screen.getByText(/Hello World/i);
  expect(dialogMsgElement).toBeInTheDocument();
});
