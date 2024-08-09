
string = "abbcc"
string = ""
string = "My Hyze 47y 7."



function count_letter(string) {

    if(!string) return "";

    count_object = {}

    let lowerCaseString = string.toLowerCase();
    let condensedStringArray = lowerCaseString.match(/[a-z]/g);
    //console.log(condensedStringArray)

    condensedStringArray.forEach((char) => {
        if(!count_object[char]) {
            count_object[char] = 1;
        } else {
            count_object[char]++;
        }

    })

    let keyArray = Object.keys(count_object);
    let valuesArray = Object.values(count_object);

    let outputString = "";

    keyArray.forEach((key, index) => {

        let separator = ", ";
        if(index == keyArray.length - 1) separator = ""

        outputString = outputString + valuesArray[index].toString() + key + separator;         

    });


    //console.log(count_object);
    return outputString

};


console.log(count_letter(string));