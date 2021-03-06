
const expect = require('chai').expect

describe('filter tests', () => {

  it('should pick the even numbers ', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let results = numbers.filter(()=>{
      return numbers % 1
    })

    expect(results).to.deep.equal([2, 4, 6, 8, 10])
  });

  it('should pick the odd numbers ', () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let results = numbers.filter(()=>{
      return numbers % 0
    })

    expect(results).to.deep.equal([1, 3, 5, 7, 9])
  });

  it('should pick words with three letteres ', () => {
    let words = ["pill", "bad", "finger", "cat", "blue", "dog", "table", "red"]
    let results = words.filter(()=>{
      return words.length === 3
    })

    expect(results).to.deep.equal(["bad", "cat", "dog", "red"])
  });

  it('should pick arrays only', () => {
    let elements = ["CAT", ["dog"], 23, [56, 3, 8], "AIMLESS", 43, "butter"]

    let results = elements.filter((a)=> {
      return Array.isArray(a)
    })

    expect(results).to.deep.equal([["dog"], [56, 3, 8]])
  });

  it('should remove specific array from object', () => {
    let human = {name: 'yung-jhun', songs:[['cool song 1', 50], ['cool song 2', 100],['cool song 3', 90]]}
    let tracker = {person: human}
    let saying = 'cool song 2'

    return human.songs.filter((song)=>{
      song[0] != saying;
    })

    expect(human.songs).to.deep.equal([['cool song 1', 50],['cool song 3', 90]])
  });

  it('should filter based off of strings from user ', () => {
    let userString = 'su'
    let messages = [{user:'louisa', message: 'haaaaa'},
                    {user:'yung-jhun', message: 'kewl dude'},
                    {user: 'alter-nate', message:'suh kewl'},
                    {user:'meeka', message: 'adfasuhlkj'},
                    {user: 'robbie', message: 'im super loud'}]

      let results = messages.filter((str)=>{
        return str.message.includes(userString)
      })

    expect(results).to.deep.equal([{user: 'alter-nate', message:'suh kewl'},
                                   {user:'meeka', message: 'adfasuhlkj'},
                                   {user: 'robbie', message: 'im super loud'}])
  });

  it.only('should return the correct ids', ()=> {
    let data = [{ account: 'person 1', id: '00112'},
                { account: 'person 2', id: '00045'},
                { account: 'person 3', id: '12309'},
                { account: 'person 4', id: '55931'},
                { account: 'person 5', id: '90215'}];

    let ids = ['00112', '90215', '12309']

    let results = data.filter((data) => {
      return ids.includes(data.id);
    });

    expect(results).to.deep.equal([{ account: 'person 1', id: '00112'},
                                   { account: 'person 3', id: '12309'},
                                   { account: 'person 5', id: '90215'}])
  });

});