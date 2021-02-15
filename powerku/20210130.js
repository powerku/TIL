/**
 * 작업의 요청부터 종료까지 평균 시간을 줄이는 방법
 * = 대기사간 + 작업시간 - 요청시간
 * 
 *  (전 타임 작업 끝난 시간 + 요청시간) + 작업시간 - 요청시간
 * 
 * 1. 작업 대기 시간을 줄여야함.
 * How? => 작업 시간이 작은 것 부터 시작
 * 
 * 2. 요청이 들어왔냐 안들어왔냐 판단해야함.
 * 
 * 끝난 시간 + 작업시간 - 대기시간
 * 
 * A->B->C
 * (0 + 3 - 0) + (3+9-1) + (12 + 6 - 2) =  3 + 11 + 16 
 *
 * A->C->B
 * (0 + 3 - 0) + (3 + 6 - 2) + (9 + 9 - 1) 3 + 7 + 17
 * 
 * 작업순서
 * 
 * 1. 요청되는 시점이 작은 것 부터 정렬
 *  -> 작업 시간이 작은 것 부터 정렬
 * 2. 완료 된 작업은 out
 * 3. 완료 된 시점에서 -> 요청 시작이 작은 것부터 정렬 -> 작업 시간이 작은 것 부터 정렬
 * 2. 작업 시작
 * 3. 요청 되는 시점에 작업이 작은 것 부터 정렬
 * 3. 평균
 * 
 * [[0, 3], [1, 9], [2, 6]]	9
 * 
 */

console.log(solution([[0, 3], [1, 9], [2, 6]]));
// console.log(solution([[0, 3], [1, 9], [1, 6], [2, 6]]));
// console.log(solution([[0, 1], [1000, 1000]]));
// console.log(solution([[100, 100], [1000, 1000]]));
// console.log(solution([[100, 100], [1000, 1000]]));


function solution(jobs) {
    var answer = 0;
    var time = 0;
    var len = jobs.length;
    var arr  = [];

    jobs.sort((a, b)=> {
        return a[0]-b[0];
    });

    while(jobs.length > 0) {

        for (var i = 0; i < jobs.length; i++) {
            if(jobs[i][0] <= time ) {
                arr.push(jobs[i]);
            }
        }

        arr.sort((a, b) => {
            return a[1]-b[1];
        })

        console.log(arr);

        var requestTime = arr[0][0];
        var workTime = arr[0][1];

        answer += time + workTime - requestTime;
        time += workTime;
        arr.shift();
    }
 
    return Math.floor(answer / len);
}


function solution2(jobs) {
    var answer = 0;
    var time = 0; // 시간
    var len = jobs.length;

    jobs.sort((a, b) => {
            if(a[0] === b[0]) {
                return a[1] - b[1]
            } else {
                return a[0] - b[0]
            }
        });

    // 작업 시작
    while(jobs.length > 0 ) {
        var requestTime = jobs[0][0];
        var workTime = jobs[0][1];

        // 끝난 시간 + 작업시간 - 대기시간
        if(time > requestTime) {
            answer += time + workTime - requestTime;
        } else {
            answer += workTime;
        }
        time += workTime

        jobs.shift();

        jobs.sort((a, b) => {
            if(a[0] < time) {
                return a[1] - b[1]
            } else {
                return 1;
            }
        });
    }

    answer = Math.floor(answer /= len);

    return answer;
}