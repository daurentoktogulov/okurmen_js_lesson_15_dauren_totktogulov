document.addEventListener('DOMContentLoaded', () => {
function f(b) {
    const a = 12;

    console.log('f 1')
    return a + b + 35;
}

function g(x) {
    const m = 4;

    console.log('g 2')
    return f(m*x);
}
console.log('f outside', f(1));
console.log("g(21)", g(21));

const btn1 = document.getElementById('show_message');
const btn2 = document.getElementById('do_heavy_task');

btn1.addEventListener('click', () => {
    console.log('show me messag');
});

btn2.addEventListener('click', () => {
    let i = 0;
    while (i < 1000000000) {
        i++;
    }
});
});