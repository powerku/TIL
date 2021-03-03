console.log(solution([6,10,2]));
console.log(solution([3, 30, 34, 5, 9]));

function solution(numbers) {
    var answer = numbers.map(function(num) {
        return num.toString();
    })

    answer.sort(function(a, b) {
        return Number(b+a) - Number(a+b);
        // return (a+b) - (b+a);
    })

    return answer[0] === '0' ? '0' : answer.join('');
}