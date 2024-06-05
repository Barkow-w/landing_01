
const back = () => {
    let pageOne = document.getElementById('pageOne');
    let pageTwo = document.getElementById('pageTwo');

    if (pageTwo.style.display === 'flex') {
        pageOne.style.display = 'flex'
        pageTwo.style.display = 'none'
    }
}

const next = () => {
    let pageOne = document.getElementById('pageOne');
    let pageTwo = document.getElementById('pageTwo');

    if (pageTwo.style.display === 'none') {
        pageOne.style.display = 'none'
        pageTwo.style.display = 'flex'
    }
}

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



const play = () => {
    const video = document.getElementById('video');
    video.style.background = 'none'
}


const showOne = () => {
    const forumOne = document.getElementById('one')
    const downOne = document.getElementById('downOne')
    const upOne = document.getElementById('upOne')
    if (forumOne.style.display === 'none') {
        forumOne.style.display = 'block'
        downOne.style.display = 'none'
        upOne.style.display = 'block'
    } else {
        forumOne.style.display = 'none'
        downOne.style.display = 'block'
        upOne.style.display = 'none'
    }
}


const showTwo = () => {
    const forumTwo = document.getElementById('two')
    const downTwo = document.getElementById('downTwo')
    const upTwo = document.getElementById('upTwo')
    if (forumTwo.style.display === 'none') {
        forumTwo.style.display = 'block'
        downTwo.style.display = 'none'
        upTwo.style.display = 'block'
    } else {
        forumTwo.style.display = 'none'
        downTwo.style.display = 'block'
        upTwo.style.display = 'none'
    }
}

const showThree = () => {
    const forumThree = document.getElementById('three')
    const downThree = document.getElementById('downThree')
    const upThree = document.getElementById('upThree')
    if (forumThree.style.display === 'none') {
        forumThree.style.display = 'block'
        downThree.style.display = 'none'
        upThree.style.display = 'block'
    } else {
        forumThree.style.display = 'none'
        downThree.style.display = 'block'
        upThree.style.display = 'none'
    }
}

const showFour = () => {
    const forumFour = document.getElementById('four')
    const downFour = document.getElementById('downFour')
    const upFour = document.getElementById('upFour')
    if (forumFour.style.display === 'none') {
        forumFour.style.display = 'block'
        downFour.style.display = 'none'
        upFour.style.display = 'block'
    } else {
        forumFour.style.display = 'none'
        downFour.style.display = 'block'
        upFour.style.display = 'none'
    }
}

const showFive = () => {
    const forumFive = document.getElementById('five')
    const downFive = document.getElementById('downFive')
    const upFive = document.getElementById('upFive')
    if (forumFive.style.display === 'none') {
        forumFive.style.display = 'block'
        downFive.style.display = 'none'
        upFive.style.display = 'block'
    } else {
        forumFive.style.display = 'none'
        downFive.style.display = 'block'
        upFive.style.display = 'none'
    }
}

const showSix = () => {
    const forumSix = document.getElementById('six')
    const downSix = document.getElementById('downSix')
    const upSix = document.getElementById('upSix')
    if (forumSix.style.display === 'none') {
        forumSix.style.display = 'block'
        downSix.style.display = 'none'
        upSix.style.display = 'block'
    } else {
        forumSix.style.display = 'none'
        downSix.style.display = 'block'
        upSix.style.display = 'none'
    }
}

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

$(document).ready(function(){
    $('#tel').inputmask("+7 (999) 999-99-99");
});









