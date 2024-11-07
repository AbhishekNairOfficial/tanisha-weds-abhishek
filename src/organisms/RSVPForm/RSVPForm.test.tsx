import { fireEvent, render, screen } from "@testing-library/react"
import Form from "./RSVPForm"
import { describe, expect, it, vi } from "vitest"
import { saveRSVP } from "../../utils/supabase/supabase";

vi.mock('../../utils/supabase/supabase.ts');

describe('RSVP Form', () => {
    render(
        <Form />
    )

    const nameInput = screen.getByLabelText('Your Name');
    const radioInputYes = screen.getByLabelText('Yes');
    const noOfGuestsInput = screen.getByLabelText('Number of Guests in your party (Including you)?');
    const phoneInput = screen.getByLabelText("Phone Number");
    const button = screen.getByText('Submit');
    it("throws error with empty values", () => {
        button.click();

        const mockSaveRSVP = vi.fn().mockImplementation(saveRSVP);
        expect(mockSaveRSVP).not.toHaveBeenCalled();
    })

    it('submits on correct value', () => {
        fireEvent.change(nameInput, { target: { value: 'Full Name' } });
        radioInputYes.click();
        fireEvent.change(noOfGuestsInput, { target: { value: '2' } });
        fireEvent.change(phoneInput, { target: { value: '+11234567890' } });

        const mockSaveRSVP = vi.fn().mockImplementation(saveRSVP);
        mockSaveRSVP.mockResolvedValueOnce(Promise.resolve({ value: "" }));

        button.click();

        expect(saveRSVP).toHaveBeenCalled();
    })
})