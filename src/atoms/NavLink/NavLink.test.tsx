import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import * as useScreenWidth from "../../hooks/useScreenWidth";
import NavLink from "./NavLink";

vi.mock('../../hooks/useScreenWidth', () => ({
    default: vi.fn(() => 788),
}));

const mockUseCustomHook = vi.spyOn(useScreenWidth, 'default');

describe('NavLink', () => {
    it("renders correctly", () => {
        mockUseCustomHook.mockReturnValueOnce(769);

        const { unmount } = render(
            <MemoryRouter>
                <NavLink link='/home' title='Home' icon='' />
            </MemoryRouter>
        )
        expect(mockUseCustomHook).toHaveBeenCalledTimes(1);

        unmount();
    });

    it("renders correctly on mobile", () => {
        mockUseCustomHook.mockReturnValueOnce(600);

        const { unmount } = render(
            <MemoryRouter>
                <NavLink link='/home' title='Home' icon='' />
            </MemoryRouter>
        )
        expect(mockUseCustomHook).toHaveBeenCalledTimes(2);

        unmount();
    });
})