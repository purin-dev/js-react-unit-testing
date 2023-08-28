import {render, screen} from "@testing-library/react";
import Counter from "./counter";
import userEvent from "@testing-library/user-event";


// Writing tests for react components is similar to writing normal jest tests
// The main differences come from having to render the component and simulate user input.
// For that purpose, we use React Testing Library (RTL)
// More about RTL - https://testing-library.com/docs/react-testing-library/example-intro
// RTL cheat sheet - https://raw.githubusercontent.com/testing-library/react-testing-library/main/other/cheat-sheet.pdf
it('starts the counter at 0', async ()=>{
    // ARRANGE
    // First, we render the component. You can pass props here if your component has them.
    //  If you're trying to test props, you might need to set up the values  before rendering - that's okay.
    render(<Counter></Counter>)

    // ASSERT
    // To validate the rendered HTML, we have to use React Testing Library queries to find the relevant element
    // In this case, we're doing getByText and looking for an element on the page that matches the regex
    // More about queries - https://testing-library.com/docs/queries/about/#overview (check out the chrome extension)
    // Then we're using the toHaveTextContent matcher to assert that it has a count of 0
    expect(screen.getByText(/count/i)).toHaveTextContent(/count: 0/i)

})


// Note that our test function here is async. This is so we can await user input events.
it('increases the counter when increase is clicked', async ()=>{
    // ARRANGE
    // First, we render the component. You can pass props here if your component has them.
    //  If you're trying to test props, you might need to set up the values  before rendering - that's okay.
    render(<Counter></Counter>)

    // ACT
    // userEvent lets us simulate user input on elements. It has many methods (click, hover, tab, etc...)
    // This query is getByRole - it looks for an element of a specified role (i.e., a button) with the specified name
    // Name refers to the "accessible name". Learn more: https://www.tpgi.com/what-is-an-accessible-name/
    await userEvent.click(screen.getByRole('button',{name: "Increase"}))

    // ASSERT
    expect(screen.getByText(/count/i)).toHaveTextContent(/count: 1/i)

})

// Note that our test function here is async. This is so we can await user input events.
it('decreases the counter when decrease is clicked', async ()=>{
    render(<Counter></Counter>)

    await userEvent.click(screen.getByRole('button',{name: "Decrease"}))

    expect(screen.getByText(/count/i)).toHaveTextContent(/count: -1/i)

})