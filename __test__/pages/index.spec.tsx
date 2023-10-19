// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import Index from "pages/index";

test('renders index page', () => {
    const { getByText } = render(<Index />);
    const helloWorldElement = getByText('Hello, World');
    expect (helloWorldElement).toBeInTheDocument();
});