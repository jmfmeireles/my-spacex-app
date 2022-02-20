import { render } from '@testing-library/react';
import Header from '../Header';

it('renders header properly', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
