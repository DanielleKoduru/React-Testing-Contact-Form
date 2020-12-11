import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders ContactForm component without errors", () => {
    render(<ContactForm />);
});

test("user can fill out and submit the form", async () => {
    render(<ContactForm />);

    // Query for each input field 
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Fill out the form 
    userEvent.type(firstNameInput, "Danielle");
    userEvent.type(lastNameInput, "Koduru");
    userEvent.type(emailInput, "danielle@team.com");
    userEvent.type(messageInput, "Hi, how are you?");

    // Click the button 
    await act(async () => {
    const button = screen.getByRole("button", { name: /submit/i });
    userEvent.click(button)
    });

    // Assert the new form added is now on the page
    const name = screen.getByText(/danielle/i);
    expect (name).toBeInTheDocument();
});