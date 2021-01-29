// const progress = [93,30,55];
// const speeds = [1,30,5];
// const result = [2,1];

const progress = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
const result = [1, 3, 2];
console.log(Solution(progress, speeds));
function Solution(progress, speeds) {
    var answer = [];
    var copyPro = progress.slice();
    var copySpeed = speeds.slice();
    var todayCnt;
    var lineCheck;
    while (copyPro.length > 0) {
        lineCheck = true;
        todayCnt = 0;

        copyPro.forEach(function (item, idx) {
            //기능 추가
            copyPro[idx] += copySpeed[idx];

            //배포
            if (lineCheck) {
                if (copyPro[idx] >= 100) {
                    todayCnt++;
                }
                else {
                    lineCheck = false;
                }
            }
        });
        if (todayCnt > 0) {
            copyPro = copyPro.slice(todayCnt);
            copySpeed = copySpeed.slice(todayCnt);
            answer.push(todayCnt);
        }
    }
    return answer;
}