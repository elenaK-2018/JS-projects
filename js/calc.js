export const calc = () => {
    const sum = document.querySelector('.sum');
    const subtract = document.querySelector('.subtract');
    const multiply = document.querySelector('.multiply');
    const division = document.querySelector('.division');

    const sumNumbers = () => {
        let x = parseFloat(document.getElementById('x').value); 
        let y = parseFloat(document.getElementById('y').value); 
        let result = x + y;        
        document.querySelector('.calc__result').textContent = result; 
    };

    sum.addEventListener('click', sumNumbers);

    const subtractNumbers = () => {
        let x = parseFloat(document.getElementById('x').value); 
        let y = parseFloat(document.getElementById('y').value); 
        let result = x - y;
        document.querySelector('.calc__result').textContent = result; 
    };

    subtract.addEventListener('click', subtractNumbers);

    const multiplyNumbers = () => {
        let x = parseFloat(document.getElementById('x').value); 
        let y = parseFloat(document.getElementById('y').value); 
        let result = x * y;
        document.querySelector('.calc__result').textContent = result; 
    };

    multiply.addEventListener('click', multiplyNumbers);

    const divisionNumbers = () => {
        let x = parseFloat(document.getElementById('x').value); 
        let y = parseFloat(document.getElementById('y').value); 

        if (y === 0) {
            document.querySelector('.calc__result').innerText = "you can't divide by zero";
        } else {
            let result = x / y;
            document.querySelector('.calc__result').innerText = result.toFixed(2);
        }
    };

    division.addEventListener('click', divisionNumbers); 
};

