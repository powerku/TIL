console.log(solution([3, 0, 6, 1, 5]));

function solution(citations) {
    var answer = 0;

    citations.sort(function (a, b) {
        return b-a;
    })

    for(var i = 0; i < citations.length; i++) {
        if(citations[i] >= i+1) {
            answer = citations[i];
        }
    }

    return answer;
}