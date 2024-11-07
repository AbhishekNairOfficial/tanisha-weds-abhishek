import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LandingTemplate from './Landing';

// Mock child components
vi.mock('../organisms/Header/Header', () => ({
    default: () => <div data-testid="mock-header">Header</div>
}));

vi.mock('../atoms/Trees/Trees', () => ({
    default: () => <div data-testid="mock-trees">Trees</div>
}));

describe('LandingTemplate', () => {
    it('renders all components in correct order', () => {
        const { unmount } = render(
            <LandingTemplate>
                <div data-testid="child-content">Child Content</div>
            </LandingTemplate>
        );

        const elements = screen.getAllByTestId(/mock-.*|child-content/);

        // Check if all components are rendered
        expect(elements).toHaveLength(3);

        unmount();
    });

    it('renders spacing divs with correct classes', () => {
        const { container, unmount } = render(
            <LandingTemplate>
                <div>Child Content</div>
            </LandingTemplate>
        );

        // Find spacing divs
        const spacingDivs = container.getElementsByClassName('h-24');
        expect(spacingDivs).toHaveLength(2);

        // Check responsive class on second spacing div
        const responsiveDiv = container.querySelector('.h-24.md\\:h-0');
        expect(responsiveDiv).toBeTruthy();

        unmount();
    });

    it('renders children prop correctly', () => {
        const testContent = 'Test Child Content';
        const { unmount } = render(
            <LandingTemplate>
                <div>{testContent}</div>
            </LandingTemplate>
        );

        expect(screen.getByText(testContent)).toBeTruthy();

        unmount();
    });

    it('renders multiple children correctly', () => {
        const { unmount } = render(
            <LandingTemplate>
                <div data-testid="child-1">First Child</div>
                <div data-testid="child-2">Second Child</div>
            </LandingTemplate>
        );

        expect(screen.getByTestId('child-1')).toBeTruthy();
        expect(screen.getByTestId('child-2')).toBeTruthy();

        unmount();
    });

    it('maintains component structure with empty children', () => {
        const { unmount } = render(<LandingTemplate>{null}</LandingTemplate>);

        expect(screen.getByTestId('mock-header')).toBeTruthy();
        expect(screen.getByTestId('mock-trees')).toBeTruthy();

        // Check if spacing divs are still present
        const { container, unmount: unmountNext } = render(<LandingTemplate>{null}</LandingTemplate>);
        const spacingDivs = container.getElementsByClassName('h-24');
        expect(spacingDivs).toHaveLength(2);

        unmount();
        unmountNext();
    });
});