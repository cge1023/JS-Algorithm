function solution(numbers) {
    var answer = 0;
    let newArray = numbers.sort((a, b) => {
    return a - b
  })
  answer = numbers[numbers.length-1] * numbers[numbers.length-2]
  
    return answer;
}

console.log(solution([0,31,24,10,1,9]))