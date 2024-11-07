import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    beforeEach(() => {
        // Reset any mocks or test state if needed
    });

    it('renders input element by default', () => {
        const { unmount } = render(<Input name="test-input" />);
        const input = screen.getByRole('textbox');
        expect(input.tagName.toLowerCase()).toBe('input');

        unmount();
    });

    it('renders textarea when elementType is textarea', () => {
        const { unmount } = render(<Input name="test-textarea" elementType="textarea" />);
        const textarea = screen.getByRole('textbox');
        expect(textarea.tagName.toLowerCase()).toBe('textarea');

        unmount();
    });

    it('displays label when provided', () => {
        const labelText = 'Test Label';
        const { unmount } = render(<Input name="test-input" label={labelText} />);
        expect(screen.getByText(labelText)).toBeDefined();

        unmount();
    });

    it('generates unique id using useId', () => {
        const { unmount } = render(
            <>
                <Input name="first-input" />
                <Input name="second-input" />
            </>
        );
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0].id).not.toBe(inputs[1].id);

        unmount();
    });

    it('sets custom error message when validation fails', async () => {
        const errorMessage = 'Custom error message';
        const { unmount } = render(
            <Input
                name="test-input"
                required
                errorMessage={errorMessage}
            />
        );

        const input = screen.getByRole('textbox');
        fireEvent.invalid(input);

        // Check if setCustomValidity was called with error message
        expect(input).toHaveProperty('validationMessage', errorMessage);

        unmount();
    });

    it('clears custom validity on input change', async () => {
        const errorMessage = 'Custom error message';
        const { unmount } = render(
            <Input
                name="test-input"
                required
                errorMessage={errorMessage}
            />
        );

        const input = screen.getByRole('textbox');

        // First trigger invalid state
        fireEvent.invalid(input);
        expect(input).toHaveProperty('validationMessage', errorMessage);

        // Then simulate user input
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input).toHaveProperty('validationMessage', '');

        unmount();
    });

    it('forwards additional props to input element', () => {
        const { unmount } = render(
            <Input
                name="test-input"
                placeholder="Test placeholder"
                maxLength={10}
                data-testid="custom-input"
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toHaveProperty("placeholder", 'Test placeholder');
        expect(input).toHaveProperty('placeholder', 'Test placeholder');
        expect(input).toHaveProperty('maxLength', 10);

        unmount();
    });
});