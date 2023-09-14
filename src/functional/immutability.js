import { Map } from 'immutable'
//IMMUTABILITY------------------------------------
const person = { 
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco"
  } 
}
//working with nested object we have to make a deep copy 
const updated = {
  ...person, 
  address: {
    ...person.address,
    city: "New York"
  }
}

console.log(person)


//using immutable library

let book = Map({ title: "Harry Potter" })

function publish(book){
  return book.set("isPublished" = true);
}

book = publish(book)
//cannot just use book.title with the immutable library, need to use .get or .toJS
console.log(book.toJS())