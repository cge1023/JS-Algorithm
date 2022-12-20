function solution(array) {
  var answer = 0;
  let ascArray = array.sort(function (a, b) {
    return a - b;
  });
  let index = Math.floor(ascArray.length / 2);
  answer = ascArray[index];
  return answer;
}

console.log(solution([1, 2, 7, 10, 11]));
