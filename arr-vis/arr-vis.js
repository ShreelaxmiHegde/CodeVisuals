const container = document.getElementById('arr-container');
const genBtn = document.querySelector('.gen-btn');

function drawArr(arr) {
    container.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const box = document.createElement('div');
        box.className = 'arr-el';
        box.innerText = arr[i];
        container.appendChild(box);
    }
}

genBtn.addEventListener('click', () => {
    const randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    drawArr(randomArr);
});

const defaultArr = [1, 2, 3, 4];
window.onload = () => {
    drawArr(defaultArr);
};
