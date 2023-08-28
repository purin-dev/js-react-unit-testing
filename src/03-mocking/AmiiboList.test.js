import {render} from "@testing-library/react";
import AmiiboApiContext from "./AmiiboApiContext";


// When our code calls an API, it is helpful to write unit tests that don't depend on the API
// This avoids our tests breaking due to data changing or the API being down
// It also lets us fake error responses to unit test our error-handling functionality
// We can do this and more using a tool called "Mocking"

// In jest, one way to mock something is to mock the whole module. In this case, we'll mock the AmiiboApiClient
import AmiiboApiClient from "./AmiiboApiClient";
import AmiiboList from "./AmiiboList";
jest.mock("./AmiiboApiClient")
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    AmiiboApiClient.mockClear();
});
it("calls the API and displays the list of amiibos returned", ()=>{
    let mockApi = new AmiiboApiClient()

    // Since our component gets the api client through the context, we can pass our mocked on in like that too
    render(<AmiiboApiContext.Provider value={mockApi}><AmiiboList/></AmiiboApiContext.Provider>)


})