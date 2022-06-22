let groupAnagram = function(strs) 
{
    let group = [];
    let output = [];
    let input = strs.slice();
    let var1 , var2;
    for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].split('').sort().join('');
    }
    console.log(input);
    for (let i = 0; i < strs.length; i++) {
        if (check_alphapetic(strs[i])) {
            let s = input[i];
            group.push(s);   
            for (let j = i + 1; j < strs.length; j++) {
                let ans = check_equality(strs[i], strs[j]);
                if (ans === true) {
                    let t = input[j];
                    group.push(t);
                    strs[j] = "#";
                }
            }  
            output.push(group);
            group =[];
        }
    }
    return output;
}
let check_equality = function(right, left) {
    if (right.length !== left.length) {
        return false;
    }
    for (let i = 0; i < right.length; i++) {
        if (right[i] !== left[i]) {
            return false;
        }
    } 
    return true;
}
let check_alphapetic = function(str) {
    let code ;
    for (let i = 0, len = str.length ; i < len; i++) {
        code = str.charCodeAt(i);
        if(!(code >= 65 && code <= 91) && !(code >= 97 && code <= 123)) {
            return false;
        }
    }
    return true;
}