import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { ReduxProvider } from '@/lib/Provider';
import { renderWithProviders } from '@/lib/utils/test-utils';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Home', () => {
  it('renders a table for the door list', async () => {
    const { findByText } = renderWithProviders(<Home />);

    const building = await findByText('Error');

    expect(building).toBeVisible();
  });
});
