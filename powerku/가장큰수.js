/**
 * 1. 숫자 붙이기
 *     ? 다 붙이고 정렬 ?
 *     ? 가장 큰 수로 정렬 ?
 * 2. 가장 큰 수 정렬
 */


// console.log(solution([6,10,2]));
// console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([0,0,0,0]));
console.log(solution([21, 212]));

function solution(numbers) {
    var answer = '';

    numbers.sort(function(a, b) {
        var f1 = a.toString().substring(0,1);
        var f2 = b.toString().substring(0,1);

        if(f1 === f2) {
            var len = Math.max(a.toString().length, b.toString().length);

            for (var i = 0; i < len; i++) {
                f1 = parseInt(a.toString().substring(i, i+1));
                f2 = parseInt(b.toString().substring(i, i+1));

                if(f1 === 0) {
                    return 1;
                }

                if(f2 === 0) {
                    return -1;
                }

                if(f1 === f2) {
                    continue;
                } else if (f2 > f1) {
                    return 1;
                } else {
                    return -1;
                }
            }
        } else {
            return f2 - f1;
        }
    });

    for (let i = 0; i < numbers.length; i++) {
       answer += numbers[i];
    }
    
    return answer;

}