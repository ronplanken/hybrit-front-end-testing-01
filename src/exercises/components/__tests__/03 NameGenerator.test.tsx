import React from 'react';
import { render } from '@testing-library/react';
import { NameGeneratorWithService } from '../03 NameGeneratorWithService';

test('if clicking the button will show a random name', () => {
  render(<NameGeneratorWithService />);
  
})
