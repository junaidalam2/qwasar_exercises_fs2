


param_1 = ""
param_1 = "(johndoe)"
param_1 = "([)]"
param_1 = "{[(0 + 0)(1 + 1)](3*(-1)){()}}"


function brackets(param_1) {

    if(!param_1) return 1

    let roundBracketOpen = 0;
    let roundBracketOpenBoolean = false;
    let squareBracketOpen = 0;
    let squareBracketOpenBoolean = false;
    let curlyBraket = 0;
    let curlyBraketBoolean = false;

    for(let i = 0; i < param_1.lenth; i++) {

            switch (param_1[i]) {
            case "(":
                roundBracketOpen++
                roundBracketOpenBoolean = true;
            case ")":
                roundBracketOpen--
            case "[":
                squareBracketOpen++
                squareBracketOpenBoolean = false;
            case "]":
                squareBracketOpen--
            case "{":
                curlyBraket++
                curlyBraketBoolean = false;
            case "}":
                curlyBraket--
            }
     
            if(roundBracketOpen < 0 || squareBracketOpen < 0 || curlyBraket < 0) return 0
            
    }

        if(roundBracketOpen > 0 || squareBracketOpen > 0 || curlyBraket > 0) return 0
        return 1
}


console.log(brackets(param_1))
