import {render, screen} from "@testing-library/react";
import Counter from "./counter";
import userEvent from "@testing-library/user-event";


// Writing tests for react components is similar to writing normal jest tests
// The main differences come from having to render the component and simulate user input.
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
