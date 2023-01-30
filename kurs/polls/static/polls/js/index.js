document.getElementById('submit').addEventListener('click', submitFunc)

function submitFunc(event) {
    event.preventDefault()
    const year = 2023;
    let first = document.getElementById('year')
    let second = document.getElementById('country')
    let third = document.getElementById('materials')
    let fourth = document.getElementById('unique')
    let field = document.getElementById('main')
    let secField = document.getElementById('price')
    if (second.value == 'Rus') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if (year - parseInt(first.value) > 100 ) {
            field.innerText = "Ваш предмет считается антиквариатом, но его нельзя вывозить из-за странны по закону 'О вывозе и ввозе культурных ценностей'"
        } else if (year - parseInt(first.value) > 60) {
            field.innerText = 'Ваш предмет считается антиквариатом'
        } else if (year - parseInt(first.value) < 60 && (year - parseInt(first.value) > 15)) {
            field.innerText = 'Ваш предмет не считается антиквариатом, но может быть оценен как винтаж'
        } else {
            field.innerText = 'Ваш предмет не является ни антиквариатом, ни винтажом'
        }
    }

    if (second.value == 'UK') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if (year - parseInt(first.value) > 100 ) {
            field.innerText = 'Ваш предмет считается антиквариатом'
        } else if (year - parseInt(first.value) >= 50 && year - parseInt(first.value) <= 100) {
            field.innerText = 'Ваш предмет не считается антиквариатом, но может быть оценен как винтаж'
        } else {
            field.innerText = 'Ваш предмет не является ни антиквариатом, ни винтажом'
        }
    }

    if(second.value == 'USA') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if ( parseInt(first.value) < 1830 ) {
            field.innerText = 'Ваш предмет считается антиквариатом'
        } else if ( (parseInt(first.value)) >= 1830 && (year - parseInt(first.value)) >= 50 ) {
            field.innerText = 'Ваш предмет не считается антиквариатом, но может быть оценен как винтаж'
        } else {
            field.innerText = 'Ваш предмет не является ни антиквариатом, ни винтажом'
        }
    }

    if (second.value == 'Canada') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if ( parseInt(first.value) < 1834 ) {
            field.innerText = 'Ваш предмет считается антиквариатом'
        } else if ( (parseInt(first.value)) >= 1834 && (year - parseInt(first.value)) >= 65 ) {
            field.innerText = 'Ваш предмет не считается антиквариатом, но может быть оценен как винтаж'
        } else {
            field.innerText = 'Ваш предмет не является ни антиквариатом, ни винтажом'
        }
    }

    if (second.value == 'else') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if ( year - parseInt(first.value) > 100) {
            field.innerText = 'Предположительно, ваш предмет считается антиквариатом'
        } else if (year - parseInt(first.value) <= 100 &&year - parseInt(first.value) > 50) {
            field.innerText = 'Предположительно, ваш предмет считается винтажом, но не антиквариатом'
        } else {
            field.innerText = 'Преположительно, ваш предмет не является ни винтажом, не антиквариатом'
        }
    }

    // secondary

    if (third.value == '?') {
        if (fourth.value == 'no') {
            secField.innerText = 'Цена за ваш предмет зависит от редкости предмета'
        } else if (fourth.value == 'yes') {
            secField.innerText = 'Цена за ваш предмет будет не слишком высокой, все зависит от технологии изготовления'
        } else if (fourth.value == 'mb') {
            secField.innerText = 'Цену за ваш предмет определить сложно'
        }
    } else if (third.value == 'no') {
        if (fourth.value == 'no') {
            secField.innerText = 'Цена за ваш предмет сильно зависит от редкости предмета'
        } else if (fourth.value == 'yes') {
            secField.innerText = 'Технология изготовления может сильно повлиять на стоимость предмета в лучшую сторону'
        } else if (fourth.value == 'mb') {
            secField.innerText = 'Цену за ваш предмет определить сложно'
        }
    } else if (third.value == 'yes') {
        if (fourth.value == 'no') {
            secField.innerText = 'Цена за ваш предмет может оказать высокой из-за редких или дорогих материалов'
        } else if (fourth.value == 'yes') {
            secField.innerText = 'Цена на ваш товар будет высокой'
        } else if (fourth.value == 'mb') {
            secField.innerText = 'Материалы могут сильно повлиять на стоимость предмета в лучшую сторону'
        }
    }

}
