function solution(num_list) {
    const even = num_list.filter(n => n % 2 == 0).length;
  return [even, num_list.length-even]
}

console.log(solution([1,2,3,4,5]))