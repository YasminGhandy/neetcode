let s, t;
function isAnagram(s, t) {
    if(s.length !== t.length)
    {
        return false ;
    }
    else if (s === s.toLowerCase() && t === t.toLowerCase()) 
    {
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        let len = s.length
        for (let i = 0; i < len ; i++)
        {
            if (s[i] !== t[i]) {
                return false;
            }
        }
        return true;
    }
    else 
    {
        alert ("enter string in lower case!");
    }
}