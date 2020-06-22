function solution(N, users) {
    let answer = [];
    let rates = [];

    for (let i = 0; i < N; i++) {
        let success = 0;
        let failure = 0;
        users.forEach(user => {
            if (user === i+1) {
                failure++;
            }
            if (user >= i+1) {
                success++;
            }
        });
        rates.push({stage: i+1, rate: failure/success});
    }

    rates.sort((a, b) => {
        return b.rate - a.rate;
    });

    rates.forEach(item => {
        answer.push(item.stage);
    });

    return answer;
};

let N = 5;
let users = [2,1,2,6,2,4,3,3];
// let N = 4;
// let users = [4,4,4,4,4];

let answer = solution(N, users);

console.log(answer);