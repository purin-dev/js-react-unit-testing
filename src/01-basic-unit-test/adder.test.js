import Add from "./adder"

// "it" defines a unit test.
// The first argument is the name of the test. The second is the test function
// You can also use "test" in place of "it"
it('adds two numbers together', () => {
    // Typically, you want to structure tests using "Arrange, Act, Assert" or "Given, When, Then"

    // Arrange: set up your data
    //  This is a little contrived, but for more complicated data (i.e., objects), it is better than inlining the values.
    const firstNumber = 1;
    const secondNumber = 2;
    const expectedSum = 3;

    // Act: do the thing you're trying to test
    const result = Add(firstNumber, secondNumber)

    // Assert: Verify the right things happened
    //  In Jest, asserts take the form of expectations. They usually look like expect(value).(optional modifier).(matcher)
    //  In this case, toEqual is the matcher, and we have no modifier.
    //  See the docs for more: https://jestjs.io/docs/expect
    expect(result).toEqual(expectedSum)
})


// Why do we like unit tests? It lets us test our fuctions with a variety of different inputs.
// It wouldn't be very useful to just test a bunch of different values. The first test covers our "happy path" where everything works as expected.
it('error is thrown when adding non-numbers', () => {
    const firstNumber = "burger"
    const secondNumber = 2

    // If you want to validate errors are thrown, you need to wrap the function in a closure so we can pass it to expect statement
    function addBadInputs() {
        return Add(firstNumber, secondNumber)
    }

    // toThrow has many different overrides. This one takes regex and validates that the thrown error matches it
    //  more about toThrow: https://jestjs.io/docs/expect#tothrowerror
    expect(addBadInputs).toThrow(/input is not a number/)
})