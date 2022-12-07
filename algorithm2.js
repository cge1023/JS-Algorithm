function solution(a, b) {
    let answer = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            answer = answer + i;
        }
    } else if (a > b) {
        for (let j = a; j >=b; j--) {
            answer = answer + j;
        }
    } else if (a == b) {
        answer = a;
    }
    return answer;
}

console.log(solution(3,3))