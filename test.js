

string = ["ab", "bac", "abacabccabcb"];
string = ["bonjour", "salut", "bonjour", "bonjour"];
string = ["xoxAoxo", "xoxAox", "oxAox"];
len = string.length;


function str_maxlenoc(stringArray, len) {

    if(!stringArray.length) return "";

    let substringsSet = new Set();
    let firstString = stringArray[0];

    for(let i = 0; i < firstString.length; i++) {
        for(let j = i + 1; j < firstString.length; j++) {
            substringsSet.add(firstString.slice(i, j));
        }
    }

    let longestCommon = "";
    //console.log(stringArray);
    //console.log(substringsSet)
   
    let flag = false;

    for (const sub of substringsSet) {
        //console.log(sub);
        
        //console.log(sub, sub.length, longestCommon, longestCommon.length)   
        
        /*if(sub.length < longestCommon.length) {
            continue;
        }*/
        
        
        for(let i = 0; i < stringArray.length; i++) {
           
            flag = true;
       
            console.log(stringArray[i].includes(sub), 'stringArray', stringArray[i], 'sub', sub)
           if(!stringArray[i].includes(sub)) {
            flag = false;
            console.log(stringArray[i].includes(sub), 'string', stringArray[i], 'sub', sub)
            break;
           }

           
        }
        
        if(flag && sub.length >= longestCommon.length) {
            longestCommon = sub;
            console.log('longestCommon', longestCommon, 'sub', sub);
        }
        
        //console.log('condition true', sub)
        flag = false;

    }

    return longestCommon;




    /*
    for (const sub of substringsSet) {
        console.log(sub);

        if(longestCommon.length < sub.length ) {
                longestCommon = sub;
                break;
        }

        for(let i = 0; i < stringArray.length; i ++) {
            !stringArray[i].includes(sub)
                break;

        }
        
        longestCommon = sub

    }   

    return longestCommon;
*/
}


      // Find the longest common substring
//   for (const substring of substringsSet) {
//     if (substring.length <= longestCommon.length) {
//       break; // Optimization: stop checking if current substring is shorter than the longest found
//     }
//     if (stringArray.every(str => str.includes(substring))) {
//       longestCommon = substring;
//     }
//   }



  
    


console.log(str_maxlenoc(string, len))