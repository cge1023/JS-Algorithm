function solution(sides) {
    var answer = 0;
    let newSides = sides.sort((a, b) => {
      return a - b
    })
    if(newSides[2] < newSides[0] + newSides[1]) answer = 1;
    else answer = 2;
    return answer;
}

console.log(solution([3,6,2]))