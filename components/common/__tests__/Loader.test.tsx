import { render } from '@testing-library/react';
import Loader from '../Loader';

it('renders Loader properly', () => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});
