function solution(relation) {
    let answer = 0;
    let uniqueness = findUniqueness(relation);

    

    return uniqueness;
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