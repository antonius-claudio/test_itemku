const User = require('./User');

function solution(record) {
    let answer = [];
    let ListUser = getUsers(record);

    record.forEach(element => {
        if (element[0] === 'Enter') {
            let hasCame = ListUser.find(item => item.id === element[1]);
            if (hasCame) {
                let index = ListUser.findIndex(item => item.id === element[1]);
                ListUser[index].nick = element[2];
            }
            answer.push([element[1], `came in.`]);
        } else if (element[0] === 'Leave') {
            answer.push([element[1], `has left.`]);
        } else {
            let index = ListUser.findIndex(item => item.id === element[1]);
            ListUser[index].nick = element[2];
        }
    });

    let temp = [];
    answer.forEach(element => {
        let nick = getNick(ListUser, element[0]);
        temp.push(`${nick} ${element[1]}`);
    });
    return temp;
};

function getNick(ListUser, id) {
    let index = ListUser.findIndex(item => item.id === id);
    return ListUser[index].nick;
}

function getUsers(params) {
    let temp = [];
    params.forEach(element => {
        if (element.length === 3) {
            if (!temp.find(item => item.id === element[1])) {
                temp.push(new User(element[1], element[2]));
            }
        }
    });
    return temp;
}

function getCommandsAsArray(input) {
    let record = [];

    input.forEach((element, index) => {
        if (index >= 2) {
            record.push(element);
        }
    });
    record = record.join("");
    record = record.substr(1, record.length-2).split(',');
    let temp = [];
    record.forEach(element => {
        temp.push(element.split(' '));
    });
    return temp;
};

let input = process.argv;

let record = getCommandsAsArray(input);

let answer = solution(record);

console.log(answer);