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


function solution(jobs) {
    var answer = 0;
    var time = 0;

    jobs.sort(function (a, b) {
        return a[0] - b[0];
    });

    var priority = [];
    var i = 0;
    while (i < jobs.length || priority.length !== 0) {
        if(jobs.length > i && time >= jobs[i][0]) {
            priority.push(jobs[i]);
            priority.sort(function(a, b) {
                return a[1] - b[1];
            });
            i++;
            continue;
        }
        if (priority.length !== 0) {
            time += priority[0][1];
            answer += time - priority[0][0];
            priority.shift();
        } else {
            time = jobs[i][0];
        }
    }

    return parseInt(answer / jobs.length);
}