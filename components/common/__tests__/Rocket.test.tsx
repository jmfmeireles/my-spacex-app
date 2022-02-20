import { render } from '@testing-library/react';
import Rocket from '../Rocket';

it('renders Rocket properly', () => {
  const { container } = render(<Rocket />);
  expect(container).toMatchSnapshot();
});
