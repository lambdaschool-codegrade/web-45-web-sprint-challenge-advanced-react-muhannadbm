import React from "react";
import { screen , render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText('Checkout Form')
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstname = screen.getByLabelText("First Name:")
    const lastname = screen.getByLabelText("Last Name:")
    const address = screen.getByLabelText("Address:")
    const city = screen.getByLabelText("City:")
    const zipcode = screen.getByLabelText("Zip:")
    const  state = screen.getByLabelText("State:")
    const submit = screen.getByRole('button')
    const messageDisplay = screen.queryByTestId('successMessage')
    expect(messageDisplay).toBeNull()
    
    userEvent.type(firstname, 'Muhannad')
    userEvent.type(lastname, 'Bani Almarje')
    userEvent.type(address, '4444 wahsington blvd')
    userEvent.type(city, 'Mclean')
    userEvent.type(zipcode, '20443')
    userEvent.type(state, 'VA')
    userEvent.click(submit)

    const successMess = screen.getByTestId('successMessage')
    expect(successMess).toBeInTheDocument()

});
