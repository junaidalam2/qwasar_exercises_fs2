


param_1 = [-5,  2, 10, 15, 50, 70, 100, 200, 300, 1200, 5000]
param_1 = [100, 200, 300]
param_1 = [1, 2, 10, 15]
param_2 = param_1.length 
param_3 = [2, 20, 40, 70]
param_3 = [2, 4, 5, 6, 7, 10, 40, 70]
param_3 = [1, 2, 3, 4]
param_4 = param_3.length


function print_duplicates(param_1, param_2, param_3, param_4) {

    if(!param_2 || !param_4) return [];

    let short_array = [];
    let long_array = [];

    if(param_2 < param_4) {
        short_array = param_1
        long_array = param_3
    } else {
        short_array = param_3
        long_array = param_1
    }

    console.log(short_array)
    console.log(long_array)
    
    const return_array = short_array.filter( (x) => long_array.includes(x));

    return return_array;
      

};


console.log(print_duplicates(param_1, param_2, param_3, param_4));