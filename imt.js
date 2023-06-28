const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const button = document.getElementById('Calculate');
const result = document.getElementById('result');

function calculateBmi() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight < 20 || weight > 500 || height < 100 || height > 250) {
        result.textContent = 'Введите корректные значения для веса и роста!';
        return;
    }
    
    const calcBmi = weight / Math.pow(height / 100, 2);
    result.textContent = `Ваш ИМТ: ${calcBmi.toFixed(2)}`;
}

button.addEventListener('click', calculateBmi);


