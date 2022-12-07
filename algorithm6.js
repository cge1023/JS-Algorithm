function solution(arr) {
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        answer = answer + arr[i]
    }
    answer = answer / arr.length;
    return answer;
}

console.log(solution([1,2,3,4]))