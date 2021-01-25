/**
 *  
 * 
 *  https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
 * 
 * 
 *  1. 작업속도 +
 *  2. 100 -> pop
 *  3. count++;  
 **/


 // test case
console.log(solution([93, 30, 55], [1, 30, 5]));;
console.log(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]));
console.log(solution([99, 1, 99, 1],	[1, 1, 1, 1]));;

function solution(progresses, speeds) {
    var answer = [];
    var count;

    while (progresses.length > 0) {
        for (var i = 0; i < progresses.length; i++) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }

        }

        count = 0;
        var i = 0;
        while (i < progresses.length) {
            if (progresses[i] >= 100) {
                i++;
                count++;
            } else {
                break;
            }
        }

        progresses.splice(0, count);
        speeds.splice(0, count);

        if (count > 0) {
            answer.push(count);
        }
    }

    return answer;
}