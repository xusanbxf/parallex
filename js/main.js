const clouds = document.querySelectorAll('.clouds'),
    boat = document.querySelector('.boat'),
    fantasy = document.querySelector('.fantasy')

window.addEventListener('scroll', function (e) {
    boat.style.transform = `translateX(${window.scrollY}px)`
    clouds.forEach((el, i) => {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${window.scrollY * speed}px)`
    })
    fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`
})
const paralax__box = document.querySelector('.paralax__box'),
    layer = document.querySelectorAll('.layer');
paralax__box.addEventListener('mousemove', function (e) {
    layer.forEach(el => {
        let speed = el.getAttribute('data-speed'),
            x = (e.pageX * speed) / 100,
            y = (e.pageY * speed) / 100
        el.style.transform = `translate(${x}px,${y}px)`
    });
})

const timer = document.querySelector('.timer'),
    timer__num = document.querySelectorAll('.timer__num');

function timerStart() {
    timer__num.forEach((el, i) => {
        let timerAttr = el.getAttribute('data-timer')
        function scrollCount(k = 0) {
            el.innerHTML = k
            k++
            if (k <= timerAttr) {
                setTimeout(() => {
                    scrollCount(k)
                }, 30);
            }
        }
        scrollCount()
    })
}
window.addEventListener('scroll', function onScroll(e) {
    if ((window.scrollY + window.innerHeight) > timer.offsetTop) {
        timerStart()
        window.removeEventListener('scroll', onScroll)
    }
})
// console.log(timer.offsetTop);
class TYPE{
    constructor(obj){
        obj.el instanceof HTMLElement ? this.el = obj.el : this.el = document.querySelector(obj.el)
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ''
        this.typing()
    }
    typing(i = 0){
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.typing(i)
            }, 100);
        }
    }
}
const type = new TYPE({
    el:'.header__content h1'
})
const type2 = new TYPE({
    el:'.paralax__title'
})