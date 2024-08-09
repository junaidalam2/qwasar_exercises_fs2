


number = 14;
number = 6;
number = 8;




function ugly_number(number) {

    if(number < 1) return false;    
    if(number % 2 == 0) {
        number = ugly_number(number / 2)
    } else if(number % 3 == 0) {
        number = ugly_number(number / 3)
    } else if(number % 5 == 0) {
        number = ugly_number(number / 5)
    }

    return number == 1;

};

console.log(ugly_number(number));
