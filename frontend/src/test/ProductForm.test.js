import {render, screen} from '@testing-library/react';
import ProductForm from '../components/ProductForm';


test('render product form', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
  const result = render(<ProductForm defaultData={{}} />);

    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
  const inputNameElement = result.container.querySelector("#name");
  const inputIDElement = result.container.querySelector("#id");
  const inputDescriptionElement = result.container.querySelector("#description");
  const inputColourElement = result.container.querySelector("#colour");
  const inputSizeElement = result.container.querySelector("#size");

  expect(inputNameElement).toBeInTheDocument();
  expect(inputIDElement).toBeInTheDocument();
  expect(inputDescriptionElement).toBeInTheDocument();
  expect(inputColourElement).toBeInTheDocument();
  expect(inputSizeElement).toBeInTheDocument();
});
