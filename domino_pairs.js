



dominoes = [[1,2],[2,1],[3,4],[5,6]]

function number_of_equivalent_domino_pairs(dominoes) {

    domino_object = {}
    let counter = 0;

    for(domino of dominoes) {
        domino.sort((a, b) => a - b);
        if(domino_object[domino]) {
            counter++;
        } else {
            domino_object[domino] = true;
        }
    }

    return counter;


};

console.log(number_of_equivalent_domino_pairs(dominoes));