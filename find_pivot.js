


param_1 = [7, 9, 8];
param_1 = [1, 2, 3, 4, 0, 6];
param_1 = [-5, 10, 2, 5];
param_1 = [1 , 2];
param_1 = [1, 100, 0, 0, 1]; 
param_2 = param_1.length;


function find_pivot(param_1, param_2) {

    let i = 0;
    let k = param_2 - 1;
    //console.log(k)
    //const counter = 0;
    let sum_left = 0;
    let sum_right = 0;

    while (i  <  k) {

        
        if(sum_left < sum_right) {
            sum_left += param_1[i];
            i++;
        } else {
            sum_right += param_1[k];
            k--;
        }

 
        
    
    }

    //console.log(sum_left)
    //console.log(sum_right)
    return sum_left === sum_right ? 1 : -1;  


};

console.log(find_pivot(param_1, param_2));