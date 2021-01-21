let demo = document.querySelector("#demo");
let string2 = ''
let string = `
你好，我是一名前端新人
接下来我要加样式了
body{
    color: red;
}
`;

console.log(string.length);
let n = 0;

// 用setTimeout实现有延时的递归，以实现文字出现动画效果
let step = () => {
    setTimeout(() => {
        // 如果有回车则直接加换行符
        // 如果没有回车则直接加字符
        if (string[n] === '\n') {
            string2 += '<br>'
        }else if (string[n] === ' '){
            string2 += '&nbsp;'
        }else {
            string2 += string[n]
        }
        demo.innerHTML = string2;
        if (n + 1 < string.length) {
            n = n + 1;
            step();
        }
    }, 100);
};
// step();

let style = document.querySelector('#style')
