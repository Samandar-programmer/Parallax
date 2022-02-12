let sky = document.querySelector('#sky'),
    bigMountain = document.querySelector('#bigMountain'),
    mountain1 = document.querySelector('#mountain1'),
    mountain2 = document.querySelector('#mountain2'),
    person = document.querySelector('#person'),
    title = document.querySelector('.title');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    sky.style.top = value / 2.5 + 'px';
    bigMountain.style.top = value / 4 + 'px';
    mountain1.style.top = -value / 8 + 'px';
    mountain2.style.top = -value / 12 + 'px';
    person.style.top = value / 6 + 'px';
    title.style.transform = `translateY(${value / 3}px)`
})
