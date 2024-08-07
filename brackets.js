


param_1 = "([)]"
param_1 = "{[(0 + 0)(1 + 1)](3*(-1)){()}}"
param_1 = ""
param_1 = "(johndoe)"


function brackets(param_1) {

    param_1 = param_1.replace(/[^()\[\]{}]/g, '');
    console.log(param_1)
    const stack = [];

    bracket_object = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (const char of param_1) {

        //console.log(char)
        if(char in bracket_object) {
            console.log(char, char in bracket_object, bracket_object[char])
            stack.push(char);
            console.log(stack)
            //console.log('stack push', stack.push(char))
            //console.log(bracket_object[stack.pop()] !== char, stack.pop(), bracket_object[stack.pop()], char)
        } else {

            const popped_char =stack.pop()
            console.log(popped_char) 
            if (bracket_object[popped_char] && bracket_object[popped_char] !== char) {
                console.log(char)
                return 0;
            }


        } 
        
        
    }
    
    return stack.length === 0 ? 1 : 0;


}


console.log(brackets(param_1))
