let langSelected = {
    ru: true,
    en: true,
    pt: true,
    tr: true,
    fr: true,
}

let isShowFruit = {
    apple: false,
    lemon: false,
    grape: false,
    pear: false,
    orange: false,
}

const buttonColor = '#80deea'

let langArr = ['ru', 'en', 'pt', 'tr', 'fr']
let fruitsArr = ['apple', 'lemon', 'grape', 'pear', 'orange']

$(document).ready(function() {

    // красим кнопки и скрываем надписи
    for (let i = 0; i < langArr.length; i++) {
        // красим кнопки
        $(`#button-${langArr[i]}`).attr('fill', buttonColor)
        // скрываем надписи
        for (let j = 0; j < fruitsArr.length ; j++) {
            $(`#${fruitsArr[j]}-${langArr[i]}`).addClass('hide')
        }
    }

    // обработка кликов на кнопках с языками
    for (let i = 0; i < langArr.length; i++) {
        // название языка. Например, ru
        const lName = langArr[i]
        $(`#button-${lName}`).click(function () {
            if (langSelected[lName]) {
                $(`#button-${lName}`).attr('fill', 'black')
                langSelected[lName] = false
                // скрываем надписи для всех фруктов с выбранным языком
                for (let i = 0; i < fruitsArr.length ; i++) {
                    const fName = fruitsArr[i]
                    $('#' + fName + '-' + lName).addClass('hide')
                }
            } else {
                $(`#button-${lName}`).attr('fill', buttonColor)
                langSelected[lName] = true
                // показываем надписи для всех фруктов с выбранным языком
                for (let i = 0; i < fruitsArr.length ; i++) {
                    const fName = fruitsArr[i]
                    if (isShowFruit[fName])  $('#' + fName + '-' + lName).removeClass('hide')
                }
            }
        })
    }


    // обработка клика на фрукте
    for (let i = 0; i < fruitsArr.length ; i++) {
        // имя фрукта. Например, apple
        const fName = fruitsArr[i]
        // `#${fName}` -> #apple это указатель на id='apple' в html
        $(`#${fName}`).click(function () {
            // isShowFruit[fName] -> isShowFruit.apple - это свойство объекта isShowFruit
            if (isShowFruit[fName]) {
                // если выключили отображение надписей, то мы для надписей на всех языках добавляем класс hide
                $('#' + fName + '-ru').addClass('hide')
                $('#' + fName + '-en').addClass('hide')
                $('#' + fName + '-pt').addClass('hide')
                $('#' + fName + '-tr').addClass('hide')
                $('#' + fName + '-fr').addClass('hide')
                // меняем признак, что надписи, относящиеся к данному фрукту не показывать
                isShowFruit[fName] = false
            } else {
                // если включили отображение надписей, то мы для надписей на всех языках убираем класс hide, но с учетом выбранных языков
                // проверяем в langSelected
                if (langSelected.ru) $('#' + fName + '-ru').removeClass('hide')
                if (langSelected.en) $('#' + fName + '-en').removeClass('hide')
                if (langSelected.pt) $('#' + fName + '-pt').removeClass('hide')
                if (langSelected.tr) $('#' + fName + '-tr').removeClass('hide')
                if (langSelected.fr) $('#' + fName + '-fr').removeClass('hide')
                // меняем признак, что надписи, относящиеся к данному фрукту показывать
                isShowFruit[fName] = true
            }
        })
    }


})