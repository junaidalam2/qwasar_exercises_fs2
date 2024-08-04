


s1 = "" 
s2 = "long string ?ddl"

s1 = "abc"
s2 = "btarc"

s1 = "fgex.;"
s2 = "tyf34gdgf;'ektufjhgdgex.;.;rtjynur6"

 function hidenp(s1, s2) {

    if(s1 === "") return 1;

    let currentIndex = 0;
    for(let i = 0; i < s1.length; i++) {
    
        let index = s2.indexOf(s1[i]);
        
        //console.log(s1[i], index)
        if(index <= currentIndex) {
            //console.log(index, currentIndex)
            currentIndex = index;
            return 0;
        }

    }

    return 1;

 };
 
 console.log(hidenp(s1, s2));