

/*

Description
Write a function to rearrange a string so that the first zord is moved to the end of the string. In essence, you take the first word, pick it up, move it to the end of the string while shifting the rest of the string to the front.

Thus, the first word becomes the last, and others stay in the same order.

A word is a section of a string delimited by spaces/tabs or the start/end of the
string.

Function prototype (c)
/*
**
** QWASAR.IO -- rostring
**
** @param {char*} param_1
**
** @return {char*}
**
*/
'la      lumiere soit et la lumiere fut Que'
param_1 = ""
param_1 = "abc "
param_1 = "Que la      lumiere soit et la lumiere fut"
param_1 = "     AkjhZ zLKIJz , 23y"

function rostring(param_1) {

    if(!param_1) return "";
 
    let arr = param_1.split(/\s/);

    
    console.log('before arr', arr)
    let i = 0;
    while(arr[i] == '') {
        console.log(i, arr[i])
        arr.shift();
        i++;
    }

    //arr = arr.filter(element => element !== '')
    console.log(3, arr[3])
    console.log('after arr', arr)
    
    
    let newArray = arr.map((x) => x);

    newArray = newArray.filter(element => element !== '')
    console.log(newArray.length === 1)
    if(newArray.length === 1) return newArray[0] 

    console.log('before2', arr)

    let j = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length > 0) break
        arr.shift();



    }
    // while(!arr[j]) {
    //     console.log(j, arr[j])
    //     arr.shift();
    //     j++;
    // }
    // console.log('after2', arr)

    
    console.log(arr[0])
    console.log(arr)
    arr.push(arr[0]);
    arr.shift();
    arr[0].replace(/\s+/g, '');


    return arr.join(' ');

}


console.log(rostring(param_1));