const back = () => {
    let itemOne = document.getElementById('commentOne');
    let itemTwo = document.getElementById('commentTwo');
    let itemThree = document.getElementById('commentThree');
    let itemFour = document.getElementById('commentFour');

    if (itemTwo.style.display === 'none') {
        itemOne.style.display = 'flex'
        itemTwo.style.display = 'flex'
        itemThree.style.display = 'none'
        itemFour.style.display = 'none'
    }
}

const next = () => {
    let list = document.getElementById('comment-list')
    let itemOne = document.getElementById('commentOne');
    let itemTwo = document.getElementById('commentTwo');
    let itemThree = document.getElementById('commentThree');
    let itemFour = document.getElementById('commentFour');

    if (itemThree.style.display === 'none') {
        itemOne.style.display = 'none'
        itemTwo.style.display = 'none'
        itemThree.style.display = 'flex'
        itemFour.style.display = 'flex'
    }
}


const updateSelection = () => {
    let active = document.querySelector('#comment-list > div.active')

    if (active) active.classList.remove('active');

    items[index].classList.add('active');
}

const pageSelection = () => {
    let active = document.querySelector('#comment-list > div.active')

    if (active) active.classList.remove('active');

    items[index].classList.add('active');
}


const btn = {
    next: document.getElementById('next'),
    prev: document.getElementById('prev'),
    nextList: document.getElementById('nextList'),
    prevList: document.getElementById('prevList')
}

const items = document.querySelectorAll('#comment-list > div');
let index = 0

btn.next.addEventListener('click', function () {
    index = (index + 1) % items.length;
    updateSelection();
})

btn.prev.addEventListener('click', function () {
    index = (index + items.length - 1) % items.length;
    updateSelection();
});

btn.nextList.addEventListener('click', function () {
    index = (index + 1) % items.length;
    pageSelection();
})

btn.prevList.addEventListener('click', function () {
    index = (index + items.length - 1) % items.length;
    pageSelection();
});


const advantages = () => {
    let section = document.getElementById('articles');
    section.scrollIntoView({behavior: 'smooth'})
}

const comments = () => {
    let section = document.getElementById('comments');
    section.scrollIntoView({behavior: 'smooth'})
}

const partner = () => {
    let section = document.getElementById('partner');
    section.scrollIntoView({behavior: 'smooth'})
}

const forum = () => {
    let section = document.getElementById('forum');
    section.scrollIntoView({behavior: 'smooth'})
}

document.querySelectorAll('.forum-item').forEach(item => {
    const accordionHeader = item.querySelector('.forum-header')
    const accordionContent = item.querySelector('.forum-content');
    const arrowActive = item.querySelector('.arrow-open');

    accordionHeader.addEventListener('click', () => {
        accordionContent.classList.toggle('accordion-active');
        arrowActive.classList.toggle('arrow-active');
    })
})
const showMenu = () => {
    const burgerMenu = document.getElementById('burgerMenu')
    const close = document.getElementById('close')
    const open = document.getElementById('open')
    if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'flex'
        close.style.display = 'block'
        open.style.display = 'none'
    } else {
        burgerMenu.style.display = 'none'
        close.style.display = 'none'
        open.style.display = 'block'
    }
}

const pushForm = () => {
    const nameField = document.getElementById('name');
    const telField = document.getElementById('tel');
    const mainModal = document.getElementById('modal')
    const noneScroll = document.body
    const validPhone = /^\+7\((9[0-9]{2})\)\s?([0-9]{3})-?([0-9]{2})-?([0-9]{2})$/;


    const isValid = validPhone.test(telField.value)

    if (!isValid) {
        console.log(isValid, 'NO')
    } else {
        console.log(isValid, "YES")
    }

    if (nameField.value && telField.value && isValid) {
        mainModal.style.display = 'block'
        noneScroll.style.overflowY = 'hidden'
    } else {
        mainModal.style.display = 'none'
        noneScroll.style.overflowY = 'scroll'
    }

    if (nameField.value && telField.value && isValid) {
        console.log(nameField.value, telField.value)

        nameField.value = ''
        telField.value = ''
        nameField.style.borderColor = null;
        telField.style.borderColor = null;
    } else {
        if (!nameField.value) {
            nameField.style.borderColor = "red";
        } else {
            nameField.style.borderColor = null;
        }
        if (!isValid && !telField.value ) {
            telField.style.borderColor = "red";
        } else {
            telField.style.borderColor = null;
        }
    }
}

$(document).ready(function () {
    $('#image-list .image-list').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
    $('#catalog-list-1 .image-list').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
});

$(document).ready(function(){
    $("#tel").inputmask("+7(999)999-99-99");
});


