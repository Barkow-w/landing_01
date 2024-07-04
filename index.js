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


const showOne = () => {
    const forum = document.getElementById('one')
    const active = document.querySelector('.accordion-active')
    const open = document.getElementById('arrowOne')
    if (!active) {
        forum.classList.add('accordion-active')
        open.classList.add('arrow-active')
    } else {
        forum.classList.remove('accordion-active')
        open.classList.remove('arrow-active')
    }
}


const showTwo = () => {
    const active = document.querySelector('.accordion-active')
    const forum = document.getElementById('two')
    const open = document.getElementById('arrowTwo')
    if (!active) {
        forum.classList.add('accordion-active')
        open.classList.add('arrow-active')
    } else {
        forum.classList.remove('accordion-active')
        open.classList.remove('arrow-active')
    }
}

const showThree = () => {
    const active = document.querySelector('.accordion-active')
    const forum = document.getElementById('three')
    const open = document.getElementById('arrowThree')
    if (!active) {
        forum.classList.add('accordion-active')
        open.classList.add('arrow-active')
    } else {
        forum.classList.remove('accordion-active')
        open.classList.remove('arrow-active')
    }
}

const showFour = () => {
    const active = document.querySelector('.accordion-active')
    const forum = document.getElementById('four')
    const open = document.getElementById('arrowFour')
    if (!active) {
        forum.classList.add('accordion-active')
        open.classList.add('arrow-active')
    } else {
        forum.classList.remove('accordion-active')
        open.classList.remove('arrow-active')
    }
}

const showFive = () => {
    const active = document.querySelector('.accordion-active')
    const forum = document.getElementById('five')
    const open = document.getElementById('arrowFive')
    if (!active) {
        forum.classList.add('accordion-active')
        open.classList.add('arrow-active')
    } else {
        forum.classList.remove('accordion-active')
        open.classList.remove('arrow-active')
    }
}
//
// const showSix = () => {
//     const forumSix = document.getElementById('six')
//     const downSix = document.getElementById('downSix')
//     const upSix = document.getElementById('upSix')
//     if (forumSix.style.display === 'none') {
//         forumSix.style.display = 'block'
//         downSix.style.display = 'none'
//         upSix.style.display = 'block'
//     } else {
//         forumSix.style.display = 'none'
//         downSix.style.display = 'block'
//         upSix.style.display = 'none'
//     }
// }

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
    let nameField = document.getElementById('name');
    let telField = document.getElementById('tel');
    let mainModal = document.getElementById('modal')
    let noneScroll = document.body

    if (nameField.value && telField.value) {
        mainModal.style.display = 'block'
        noneScroll.style.overflowY = 'hidden'
    } else {
        mainModal.style.display = 'none'
        noneScroll.style.overflowY = 'scroll'
    }

    if (nameField.value && telField.value) {
        console.log(nameField.value, telField.value)

        nameField.value = ''
        telField.value = ''
        nameField.style.borderColor = null;
        telField.style.borderColor = null;
    } else {
        if (!nameField.value) {
        } else {
            nameField.style.borderColor = null;
        }
        if (!telField.value) {
        } else {
            telField.style.borderColor = null;
        }
    }

}

$(document).ready(function () {
    $('#tel').inputmask("+7 (999) 999-99-99");
});

$(document).ready(function () {
    $('.scroll').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });

});









