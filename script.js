const rulesBtn = document.getElementById('rules-btn');
const ruleBox = document.getElementById('rule-box');
const closeBtn = document.getElementById('close-btn');

rulesBtn.addEventListener('click', () => {
    ruleBox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    ruleBox.style.display = 'none';
});