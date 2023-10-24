import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I changed link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I changed/i);
  expect(linkElement).toBeInTheDocument();
});



 