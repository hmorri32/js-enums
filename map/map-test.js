require('mocha')
require('locus')

const expect = require('chai').expect

describe('map tests', () => {

  it('test you can upcase all strings' , () => {
    let words = ['meeka', 'jhun', 'brenna', 'steve']
    let upperCaseWords = words.map((word) => {
      return word.toUpperCase()
    })
    expect(upperCaseWords).to.deep.equal(['MEEKA','JHUN','BRENNA', 'STEVE'])
  })

  it('should allow you to allow you to double numbers', () => {
    let numbers = [1,2,3,4,5,6]

    let doubleNumbers = numbers.map((number)=> {
      return number * 2
    })
    expect(doubleNumbers).to.deep.equal([2,4,6,8,10,12]);
  });

  it('should square the numbers', () => {
    let numbers = [1,2,3,4,5,6]

    let squareNumbers = numbers.map((number)=> {
      return number * number
    })

    expect(squareNumbers).to.deep.equal([1,4,9,16,25,36]);
  })

  it('should reverse the strings', () => {
    let strings = ["alice", "bob", "charlie", "david", "eve"]

    let reverseStrings = strings.map((string)=>{
      return string.split('').reverse().join('')
    })

    expect(reverseStrings).to.deep.equal(["ecila", "bob", "eilrahc", "divad", "eve"])
  })

  it('should add key of swag to every  object', () => {
    let  arrayOfObjects = [{name:'jhun'}, {name: 'louisa'}]

    let newObjects = arrayOfObjects.map((object)=>{
      object.swag = true;
      console.log(object)
      return object
    })
    // your code goes here

    expect(newObjects[0].swag).to.deep.equal(true)
    expect(newObjects[1].swag).to.deep.equal(true)
  })

  it('should return an array with the last letter of each string', () => {
    let names = ['meeka', 'jhun', 'brenna', 'steve']

    let lastLetters = names.map((string)=>{
      return string.slice(-1)
    })

    expect(lastLetters).to.deep.equal(['a', 'n', 'a', 'e'])
  });

  it('should transform a large object into an array of objects', () => {
    let largeObject = {key1: {name: 'jhun', location: 'CA'}, key2: {name: 'brenna', location: 'MN'}, key3:{name: 'louisa', location: 'CO'}}

    let objectKeys = Object.keys(largeObject)
    let array = objectKeys.map((singleKey) => {
      let objectFromLarge = largeObject[singleKey]
      objectFromLarge.id = singleKey
      return objectFromLarge
    })
    return array

    expect(array).length.equal(3)
    expect(array).to.deep.equal([{id: 'key1', name: 'jhun', location: 'CA'}, {id: 'key2', name: 'brenna', location: 'MN'}, { id: 'key3', name: 'louisa', location: 'CO'}])
  });
});







//
