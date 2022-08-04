// Получение HTML элементов
const text = document.querySelector('.text');
const generateButton = document.querySelector('.button_generate');
const copyButton = document.querySelector('.button_copy');
const paragraphsAmount = document.querySelector(".amount__input_paragraphs");
const sentencesAmount = document.querySelector(".amount__input_sentences");
const manualCheckbox = document.querySelector(".manual-setup__checkbox");

// Части предложений
const firstPart = ['Товарищи, ', 
    'С другой стороны ', 
    'Равным образом ', 
    'Не следует, однако, забывать, что ', 
    'Таким образом, ', 
    'Повседневная практика показывает, что '];
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

// Функция генерации абзаца текста
function generateParagraph(n = Math.floor(Math.random() * 10) + 1) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(
      firstPart[Math.floor(Math.random() * firstPart.length)] +
        secondPart[Math.floor(Math.random() * secondPart.length)] +
        thirdPart[Math.floor(Math.random() * thirdPart.length)] +
        fourthPart[Math.floor(Math.random() * fourthPart.length)]
    );
  }
  return result.join(" ");
}

// Обработка клика по кнопке "Сгенерировать"
generateButton.addEventListener('click', function () {
    let result = [];
    if (paragraphsAmount.value <= 0) {
        paragraphsAmount.value = 1;
    }
    for (let i = 0; i < paragraphsAmount.value; i++) {
        if (manualCheckbox.checked) {
            if (sentencesAmount.value <= 0) {
                sentencesAmount.value = 1;
            }
            result.push(generateParagraph(sentencesAmount.value));
        } else {
            result.push(generateParagraph());
        }
    }
    text.value = result.join("\n\n");
    copyButton.textContent = "Скопировать";
    copyButton.disabled = false;
});

// Обработка клика по кнопке "Скопировать"
copyButton.addEventListener('click', function () {
    text.select();
    document.execCommand("copy");
    copyButton.textContent = 'Скопировано';
    copyButton.disabled = true;
});

// Обработка клика по чекбоксу "Выбрать количество предложений вручную"
manualCheckbox.addEventListener('click', function () {
    sentencesAmount.disabled = !manualCheckbox.checked;
});

// Генерация одного случайного предложения при загрузке страницы
text.value = generateParagraph(1);