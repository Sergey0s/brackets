function check(str, bracketsConfig) {
    let arrayFromString = str.split("");

    for (let i = 0; i < arrayFromString.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            // console.log('str', arrayFromString[i]);
            // console.log('brack', bracketsConfig[j][0]);
            // console.log('str', arrayFromString[i+1]);
            // console.log('brack', bracketsConfig[j][1]);
            if (arrayFromString[i] === bracketsConfig[j][0] && arrayFromString[i + 1] === bracketsConfig[j][1]) {
                arrayFromString.splice(i, 2);
                i = -1;
            }
        }
    }
    return arrayFromString.length === 0
}

module.exports = check;

// console.log(check("()", [["(", ")"]])); // -> true
// console.log(check("((()))()", [["(", ")"]])); // -> true
// console.log(check("())(", [["(", ")"]])); // -> false
// console.log(check("([])", [["(", ")"], ["[", "]"]])); // -> true
// console.log(check("[(])", [["(", ")"], ["[", "]"]])); // -> false
// console.log(check("[]()", [["(", ")"], ["[", "]"]])); // -> true
// console.log(check("[]()(", [["(", ")"], ["[", "]"]])); // -> false
