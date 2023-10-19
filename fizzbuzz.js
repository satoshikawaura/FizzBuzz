function fizzbuzz(n) {
    if(typeof n === "string"){
         n = parseInt(n)
    }
    if(n % 15 === 0 ){
      return 'FizzBuzz'
    }
    if(n % 3 === 0){
      return 'Fizz'
    }
    if(n % 5 === 0){
      return 'Buzz'
    }
    return String(n)
  }
  module.exports = fizzbuzz
  
  