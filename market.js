// Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу market.js')

// Отримання елементу з Id
let blockDiv = document.getElementById("block")

// Вивід знайденого елементу
console.log(blockDiv)

// Перевірка знайденого блока 
if (blockDiv) {
    // Вивід знайденого елементу 
    console.log(blockDiv)
    // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', blockDiv.classList)
    // console.log('Поле id: ', blockDiv.id)
    // console.log('Поле clientWidth: ', blockDiv.clientWidth)
    // console.log('Поле innerHTML: ', blockDiv.innerHTMl)
    // Додавання тексту в блок 
    // blockDiv.innerText = 'Перший Програмно доданий текст'
    // blockDiv.innerText += 'Другий Програмно доданий текст'
    // Додавання відформатованого HTML коду в блок 
    // blockDiv.innerText = '<h1>Другий Програмно доданий текст</h1>'
    // blockDiv.innerText += '<div class = "block"></div> '
    // blockDiv.innerText += '<div class = "block"></div> '
    // blockDiv.innerText += '<div class = "block"></div> '
    // blockDiv.innerText += '<div class = "block"></div> '
    for (let i = 0; i < 100; i++) {
        blockDiv.innerHTML += '<div class = "block"></div>'
    }
    
} else {
    // Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

