const text = document.querySelector('.text');
const button = document.querySelector('.button');
const amountInput = document.querySelector(".amount__input");

const firstPart = ['Товарищи, ', 
    'С другой стороны ', 
    'Равным образом ', 
    'Не следует, однако, забывать, что ', 
    'Таким образом, ', 
    'Повседневная практика показывет, что '];
const secondPart = ['реализация намеченных плановых заданий ', 
    'рамки и место обучения кадров ', 
    'постоянный количественный рост и сфера нашей активности ', 
    'сложившаяся структура организации ', 
    'новая модель организационной деятельности ', 
    'дальнейшее развитие различных форм деятельности '];
const thirdPart = ['играет важную роль в формировании ', 
    'требует от нас анализа ', 
    'требует определения и уточнения ', 
    'способствует подготовке и реализации ', 
    'обеспечивает широкому кругу специалистов участие в формировании ', 
    'позволяет выполнить важные задания по разработке '];
const fourthPart = ['существенных финансовых и административных условий.', 
    'дальнейших направлений развития.', 
    'системы массового участия.', 
    'позиций, занимаемых участниками в отношении поставленных задач.', 
    'новых предложений.', 
    'направлений прогрессивного развития.'];

function generatePhrase(n=1) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(
        firstPart[Math.floor(Math.random() * firstPart.length)] +
        secondPart[Math.floor(Math.random() * secondPart.length)] +
        thirdPart[Math.floor(Math.random() * thirdPart.length)] +
        fourthPart[Math.floor(Math.random() * fourthPart.length)]);
    }
    return result.join(" ");
}

button.addEventListener('click', function () {
    text.textContent = generatePhrase(amountInput.value);
});

text.textContent = generatePhrase();