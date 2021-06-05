const bars = document.body.querySelector('.fa-bars')
const times = document.body.querySelector('.fa-times')
const navigation = document.body.querySelector('.navWrapperMobile')

bars.addEventListener('click', function () {
    bars.style.display = 'none';
    times.style.display = 'block'
    navigation.style.top = '0';
    document.body.style.overflowY = 'hidden'
})
times.addEventListener('click', function () {
    bars.style.display = 'block';
    times.style.display = 'none'
    navigation.style.top = '-100vh';
    document.body.style.overflowY = 'visible'
})