const Quiz = require("./Quiz")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Anas", "Pierre Edouard"], ["Edmond", "George", "Edmond"], ["Pierre Edouard", "George", "George"]]
        inst = new Quiz.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("changeFact", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Pierre Edouard", "George"], ["George", "George", "Jean-Philippe"], ["Edmond", "George", "Edmond"]]
        inst = new Quiz.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.changeFact()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Edmond", "Michael"], ["Michael", "Edmond", "Michael"], ["Pierre Edouard", "Anas", "Pierre Edouard"]]
        inst = new Quiz.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
