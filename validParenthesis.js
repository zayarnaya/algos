const validParenthesis = (string) => {
    const stack = [];
    const dic = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < string.length; i++) {
        if (Object.keys(dic).includes(string[i])) {
            stack.push(string[i]);
        } else {
            if (!stack.length) return false;
            let prev = stack.pop();
            if (dic[prev] != string[i]) {
                return false;
            }
        }
    }
    if (stack.length) return false;
    return true;
}

console.log(validParenthesis('((()))'))
console.log(validParenthesis('((())'))
console.log(validParenthesis('([]){}'))
console.log(validParenthesis('(()())'))
console.log(validParenthesis(''))