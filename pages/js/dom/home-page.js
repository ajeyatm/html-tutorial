document.body.style.backgroundColor = 'gray'

const navBar = document.getElementById('nav-bar')
navBar.style.backgroundColor = 'white'

const logo = document.getElementById('logo')
logo.src =
  'https://banner2.cleanpng.com/20180423/asw/kisspng-logo-dragon-graphic-design-dragon-logo-5ade0b7844cbb0.4623781615245013682818.jpg'
logo.style.height = '60px'

document.getElementById('company-name').innerText = 'My Site'

navBar.style.display = 'flex'
navBar.style.justifyContent = 'space-between'

function sayhi() {
  console.log('hiii')
}
