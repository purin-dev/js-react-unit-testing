export default function Add(a, b) {

    if(typeof a !== "number" || typeof b !== "number" ) {
        throw new Error("input is not a number")
    }

    return (a + b)
}