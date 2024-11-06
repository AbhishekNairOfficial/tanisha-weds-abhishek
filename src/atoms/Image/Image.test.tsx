import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Image from "./Image";

import VENUE_PHOTO from '../../assets/venue-photo.webp';

vi.mock('../../hooks/useScreenWidth', () => ({
  default: vi.fn(() => 788),
}));

describe("Image Component", () => {
  it("Image component renders correctly", () => {
    render(<Image src={""} />);
  });

  it("Expands on click", () => {
    render(
      <Image
        animate={true}
        src={VENUE_PHOTO}
        alt='Venue'
      />);

    const button = screen.getByRole("button");

    button.click();
  });

  it("Does not click when not animated", () => {
    render(
      <Image
        animate={false}
        src={VENUE_PHOTO}
        alt='Venue'
      />);

    const button = screen.getByRole("button");

    expect(button).toBeDefined();
  });
});
