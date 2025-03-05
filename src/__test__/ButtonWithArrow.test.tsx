import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonWithArrow } from '@/components';
import { test, expect, jest } from '@jest/globals';
import { useRouter } from 'next/navigation';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test('button is clickable and triggers navigation', () => {
  const mockRouter = useRouter();
  render(<ButtonWithArrow text="Click Me" link="/destination" />);

  const button = screen.getByText('Click Me');
  fireEvent.click(button);

  expect(mockRouter.push).toHaveBeenCalledWith('/destination');
});
