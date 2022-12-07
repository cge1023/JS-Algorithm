function solution(array, height) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
      if(array[i] > height) {
        answer.push(array[i])
      }
    }
    return answer.length;
}

console.log(solution([180,120,140],190))