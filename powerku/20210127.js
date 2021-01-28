// bridge_length	weight	truck_weights	return
// 2	              10	 [7,4,5,6]	      8
// 100	             100	 [10]	         101
// 100	             100	[10,10,10,10,10,10,10,10,10,10]	110

/**
 * 1. 시간이 계속 흘러야한다.
 * 2. weight 이하면 통과
 * 3. weight 초과면 대기 -> 다리 통과
 * 3. 트럭이 다리를 건넌다.
 */


// console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));


function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    var run = [];
    var complete = [];
    var wait = truck_weights;
    var len = truck_weights.length;
    var nowWeight = weight;

    while (true) {
        if (complete.length >= len) {
            break;
        }

        nowWeight = 0;
        for (var i = 0; i < run.length; i++) {
            nowWeight += run[i].weight;
        }

        if (weight - nowWeight >= wait[0]) {
            run.push({
                weight: wait.shift(),
                time: 0
            });
        }
        for(var i = 0; i < run.length; i++) {
            run[i].time++;
        }
        if (run[0].time >= bridge_length) {
            complete.push(run.shift());
        }
        answer++;
    }
    return answer;
}