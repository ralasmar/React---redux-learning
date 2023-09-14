//CURRYING-----------------------------------------
import { compose, pipe } from "lodash/fp"

let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>"

const trim = str => str.trim()
//curried function
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim, toLowerCase, wrap("div"))
console.log(transform(input))

function add(a){
    return function(b){
        return a + b
    }
}

//currying can seprate with arrows instead of commas
const add2 = a => b => a + b;

//with currying we can arugments with paranethesis instead of comma
add(1)(5)