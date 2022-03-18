function solution(numbers) {
    let answer = 0;
    const compareArr = [0,1,2,3,4,5,6,7,8,9]

    for (let i = 0; i < compareArr.length; i++) {
        if (!numbers.includes(compareArr[i])) {
            answer = answer + compareArr[i]
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))