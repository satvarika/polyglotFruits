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

    $('#button-pt').click(function () {
        if (langSelected.pt) {
            $('#button-pt').attr('fill', 'black')
            langSelected.pt = false
        } else {
            $('#button-pt').attr('fill', buttonColor)
            langSelected.pt = true
        }
    })

    $('#button-tr').click(function () {
        if (langSelected.tr) {
            $('#button-tr').attr('fill', 'black')
            langSelected.tr = false
        } else {
            $('#button-tr').attr('fill', buttonColor)
            langSelected.tr = true
        }
    })

    $('#button-fr').click(function () {
        if (langSelected.fr) {
            $('#button-fr').attr('fill', 'black')
            langSelected.fr = false
        } else {
            $('#button-fr').attr('fill', buttonColor)
            langSelected.fr = true
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


    $('#lemon').click(function () {
        if (isShowFruit.lemon) {
            $('#lemon-ru').addClass('hide')
            $('#lemon-en').addClass('hide')
            $('#lemon-pt').addClass('hide')
            $('#lemon-tr').addClass('hide')
            $('#lemon-fr').addClass('hide')
            isShowFruit.lemon = false
        } else {
            if (langSelected.ru) $('#lemon-ru').removeClass('hide')
            if (langSelected.en) $('#lemon-en').removeClass('hide')
            if (langSelected.pt) $('#lemon-pt').removeClass('hide')
            if (langSelected.tr) $('#lemon-tr').removeClass('hide')
            if (langSelected.fr) $('#lemon-fr').removeClass('hide')
            isShowFruit.lemon = true
        }
    })

    
    $('#grape').click(function () {
        if (isShowFruit.grape) {
            $('#grape-ru').addClass('hide')
            $('#grape-en').addClass('hide')
            $('#grape-pt').addClass('hide')
            $('#grape-tr').addClass('hide')
            $('#grape-fr').addClass('hide')
            isShowFruit.grape = false
        } else {
            if (langSelected.ru) $('#grape-ru').removeClass('hide')
            if (langSelected.en) $('#grape-en').removeClass('hide')
            if (langSelected.pt) $('#grape-pt').removeClass('hide')
            if (langSelected.tr) $('#grape-tr').removeClass('hide')
            if (langSelected.fr) $('#grape-fr').removeClass('hide')
            isShowFruit.grape = true
        }
    })

    
    $('#pear').click(function () {
        if (isShowFruit.pear) {
            $('#pear-ru').addClass('hide')
            $('#pear-en').addClass('hide')
            $('#pear-pt').addClass('hide')
            $('#pear-tr').addClass('hide')
            $('#pear-fr').addClass('hide')
            isShowFruit.pear = false
        } else {
            if (langSelected.ru) $('#pear-ru').removeClass('hide')
            if (langSelected.en) $('#pear-en').removeClass('hide')
            if (langSelected.pt) $('#pear-pt').removeClass('hide')
            if (langSelected.tr) $('#pear-tr').removeClass('hide')
            if (langSelected.fr) $('#pear-fr').removeClass('hide')
            isShowFruit.pear = true
        }
    })

    
    $('#orange').click(function () {
        if (isShowFruit.orange) {
            $('#orange-ru').addClass('hide')
            $('#orange-en').addClass('hide')
            $('#orange-pt').addClass('hide')
            $('#orange-tr').addClass('hide')
            $('#orange-fr').addClass('hide')
            isShowFruit.orange = false
        } else {
            if (langSelected.ru) $('#orange-ru').removeClass('hide')
            if (langSelected.en) $('#orange-en').removeClass('hide')
            if (langSelected.pt) $('#orange-pt').removeClass('hide')
            if (langSelected.tr) $('#orange-tr').removeClass('hide')
            if (langSelected.fr) $('#orange-fr').removeClass('hide')
            isShowFruit.orange = true
        }
    })
})