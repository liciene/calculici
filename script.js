const insert = (num) => {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

const calculate = () => {
    let result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result)
    } else {
        document.getElementById('result') = '0'
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if(/[0-9.,]/.test(key)) {
        insert(key);
    } else if ('+-*/'.includes(key)) {
        insert(' ' + key + ' ');
    } else if (key === 'Enter') {
        calculate();
    }
    
    if ('+-*/'.includes(key)) {
        event.preventDefault();
    }
});
