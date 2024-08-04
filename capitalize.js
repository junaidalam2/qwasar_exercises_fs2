/*
escription
Write a function that takes one string and capitalizes the first character of each word
(If it's a letter, obviously), the rest will be in lowercase, and returns the result.

A word is a section of string delimited by spaces/tabs or the start/end of the
string. If a word has a single letter, it must be capitalized.

A letter is a character in the set [a-zA-Z]

Example 00:

Input: "a FiRSt LiTTlE TESt"
Output: "A First Little Test"
Example 01:

Input: "__second Test A Little Bit   Moar Complex"
Output: "__second Test A Little Bit   Moar Complex"
Example 02:

Input "   But... This iS not THAT COMPLEX"
Output: "   But... This Is Not That Complex"
Example 03:

Input "     Okay, this is the last 1239809147801 but not    the least    t"
Output: "     Okay, This Is The Last 1239809147801 But Not    The Least    T"
Example 04:

Input ""
Output: ""
Function prototype (c)
/*
**
** QWASAR.IO -- capitalize
**
** @param {char*} param_1
**
** @return {char*}
**
*/


param_1 = "__second Test A Little Bit   Moar Complex"
param_1 = "But... This iS not THAT COMPLEX"
param_1 = ""
param_1 = "a FiRSt LiTTlE TESt"
param_1 = "     Okay, this is the last 1239809147801 but not    the least    t"



function capitalize(param_1) {

    if(!param_1) return ""

    return param_1.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())
    

}

console.log(capitalize(param_1));
