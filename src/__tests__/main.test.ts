import * as TestFunctions from "../index"

const { main } = jest.requireActual<typeof TestFunctions>("../index")

const successCase = [
    {
        id: 1,
        input: { age1: 10, death1: 12, age2: 13, death2: 17 }, // (2, 4) => 2 + 7 = 9 ==> 4.5
        output: 4.5,
    },
    {
        id: 2,
        input: { age1: 19, death1: 20, age2: 11, death2: 16 }, // (1, 5) = 1 + 12 = 13 ==> 6.5
        output: 6.5,
    },
    {
        id: 3,
        input: { age1: 10, death1: 18, age2: 15, death2: 17 }, // (8, 2) = 54 + 2 = 56 ==> 28
        output: 28,
    },
    {
        id: 4,
        input: { age1: 15, death1: 10, age2: 16, death2: 20 }, // age error ==> -1
        output: -1,
    }
]

describe('Test main function', () => { 
    it.each(successCase)("success case $id", ({input, output}) => {
        const { age1, death1, age2, death2 } = input

        expect(main(age1, death1, age2, death2)).toBe(output)
    })
 })
