document.getElementById('submit').addEventListener('click', submitFunc)

function submitFunc() {
    const year = 2023;
    let first = document.getElementById('year')
    let second = document.getElementById('country')
    let third = document.getElementById('materials')
    let fourth = document.getElementById('unique')
    let field = document.getElementById('main')
    let secField = document.getElementById('secondary')
    if (second.value == 'Rus') {
        console.log(year, parseInt(first.value), year - parseInt(first.value))
        if (year - parseInt(first.value) > 100 ) {
            field.innerText = 'Ваш предмет считается антиквариатом, но его нельзя вывозить из-за странны по закону <О вывозе и ввозе культурных ценностей>'
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
            field.innerText = 'Ваше предмет считается антиквариатом'
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
}
