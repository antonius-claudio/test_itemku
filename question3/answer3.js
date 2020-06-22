function solution(relation) {
    let answer = 0;
    let uniqueness = findUniqueness(relation); // like primary key

    let restRelation = [];
    uniqueness.forEach(uniq => {
        relation.forEach(element => {
            let temp = [];
            element.forEach((item, index) => {
                if(index !== uniq) {
                    temp.push(item);
                }
            });
            restRelation.push(temp);
        });
    });

    let minimality = findMinimality(restRelation);

    answer = uniqueness.length + minimality.length;

    return answer;
};

function findUniqueness(relation) {
    let result = [];

    for (let i = 0; i < relation.length; i++) {
        for (let j = 0; j < relation[i].length; j++) {
            let temp = String(relation[i][j]);
            if (result[j] === undefined) {
                result[j] = {[temp]:temp};
            } else {
                result[j][temp] = temp;
            }
        }        
    };

    let lengthColumn = [];

    result.forEach(element => {
        lengthColumn.push(Object.keys(element).length);
    });

    let temp = [];
    
    lengthColumn.filter((item, index) => {
        item === relation.length ? temp.push(index) : '' ;
    })

    return temp;
}

function findMinimality(relation) {
    let change = [];
    for (let i = 0; i < relation[0].length-1; i++) {
        for (let j = i+1; j < relation[0].length; j++) {
            change.push([i,j])
        }     
    }

    let result = [];

    change.forEach((element) => {
        let obj = {};
        relation.forEach(item => {
            obj[`${item[element[0]]}${item[element[1]]}`] = 1;
        });
        if (Object.keys(obj).length === relation.length) {
            result.push(element);
        }
    });
    return result;
}

let relation = [
    ["100","ryan","music","2"],
    ["200","apeach","math","2"],
    ["300","tube","computer","3"],
    ["400","con","computer","4"],
    ["500","muzi","music","3"],
    ["600","apeach","music","2"]
];

let answer = solution(relation);

console.log(answer);