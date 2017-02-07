require('mocha')
require('locus')
const expect = require('chai').expect

describe('reduce tests', () => {

  it('should add all the numbers together', () => {
    let numbers = [32, 1, 21, 5, 81, 333]

    let result = numbers.reduce((a, b)=>{
      return a + b
    }, 0)

    expect(result).to.equal(473)
  })

  it('should subtract all the numbers', () => {
    let numbers = [28, 12, 38, 1, 91]

    let results = numbers.reduce((a, b)=>{
      return a - b
    }, 0)

    expect(results).to.equal(-170)
  })

  it('should multiply a list of number', ()=> {
    let numbers = [2, 3, 5, 7]

    let results = numbers.reduce((a, b)=>{
      return a * b
    }, 1)

    expect(results).to.equal(210)
  })

  it('subtract the smallest number', () => {
    let elements = [[8, 5, 3], [1, 9, 11], [4, 7, 2], [19, 34, 6]]

    let results = elements.reduce((a, b)=>{
      let minNum = Math.min(...b)
      return a - minNum
    }, 100)

    expect(results).to.equal(88)
  })

  it('all second values add together', () => {
    let elements = [["a", 1], ["b", 9], ["c", 21]]

    let results = elements.reduce((a, b)=>{

      return elements[0][1] + elements[1][1] + elements[2][1]
    })

    expect(results).to.equal(31);
  });

  it('divide 560 by a gang of numbers ', () => {
    let numbers = [2, 2, 2, 5, 7]

    let results = numbers.reduce((a, b)=>{
      return a / b
    }, 560)

    expect(results).equal(2);
  })

  it('capitalize keywords in a phrase', () => {
    let keywords = ["fish", "blue"]
    let saying = 'one fish two fish red fish blue fish';
    let result = saying.split(' ').map((words)=>{
      if(words === "fish" || words === "blue"){
        return words.toUpperCase();
      } else {
        return words
      }
    })

    let results = result.join(' ');

    expect(results).to.equal('one FISH two FISH red FISH BLUE FISH')
  })

  it.skip('find smallest key and value inside of the object', () => {
    let arrayOfObjects = {a: 100, b: 200, c: 300, d: 600}
    // your code goes here

    expect(smallestValue).to.deep.equal({a:100})
  })

});











//
