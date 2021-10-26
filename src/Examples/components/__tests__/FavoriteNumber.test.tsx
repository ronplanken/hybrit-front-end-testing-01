import React from 'react'
import user from '@testing-library/user-event'
import {render,screen} from '@testing-library/react'
import { FavoriteNumber } from '../FavoriteNumber'


test('if FavoriteNumer renders a number input with a label "Favorite Number"', () => {
  render(<FavoriteNumber />);
  const input = screen.getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute('type', 'number');
})

test('if entering an invalid value shows an error message', () => {
  const {rerender} = render(<FavoriteNumber />);
  const input = screen.getByLabelText(/favorite number/i);
  user.type(input, '10');
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i);
  rerender(<FavoriteNumber max={10} />);
  expect(screen.queryByRole('alert')).toBeNull();
})