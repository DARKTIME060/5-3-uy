const img = document.querySelectorAll('img')
const cls = document.querySelector('.remove')

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        img[i].classList.add('image')
        cls.style = 'display: block;'
    })
    cls.addEventListener('click', function() {
        img[i].classList.remove('image')
        cls.style = 'display: none;'
    })
}
