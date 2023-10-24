import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I changed link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/I changed/i);
  expect(linkElements.length).toBeGreaterThan(0);
  linkElements.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});
