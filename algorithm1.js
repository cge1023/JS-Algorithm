function solution(s) {
    let answer;
    let center = Math.floor(s.length / 2);
    if (s.length % 2 !== 0) {
        answer = s.substring(center, center + 1);
    } else {
        answer = s.substring(center - 1, center + 1);
    }
    return answer
}

console.log(solution('hello'))