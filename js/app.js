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

    $(`#button-ru`).click(function () {
        if (langSelected.ru) {
            $(`#button-ru`).attr('fill', 'black')
            langSelected.ru = false
        } else {
            $(`#button-ru`).attr('fill', buttonColor)
            langSelected.ru = true
        }
    })

    $('#button-en').click(function () {
        if (langSelected.en) {
            $('#button-en').attr('fill', 'black')
            langSelected.en = false
        } else {
            $('#button-en').attr('fill', buttonColor)
            langSelected.en = true
        }
    })

    $('#apple').click(function () {
        if (isShowFruit.apple) {
            $('#apple-ru').addClass('hide')
            $('#apple-en').addClass('hide')
            $('#apple-pt').addClass('hide')
            $('#apple-tr').addClass('hide')
            $('#apple-fr').addClass('hide')
            isShowFruit.apple = false
        } else {
            if (langSelected.ru) $('#apple-ru').removeClass('hide')
            if (langSelected.en) $('#apple-en').removeClass('hide')
            if (langSelected.pt) $('#apple-pt').removeClass('hide')
            if (langSelected.tr) $('#apple-tr').removeClass('hide')
            if (langSelected.fr) $('#apple-fr').removeClass('hide')
            isShowFruit.apple = true
        }
    })


})