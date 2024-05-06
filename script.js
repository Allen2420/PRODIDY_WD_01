window.addEventListener('scroll', function() {
let nav = document.getElementById('nav');
if (this.window.scrollY > 50) {
    nav.style.backgroundColor = '#ffcc00';
} else {
    nav.style.backgroundColor = '#333'
}
})

let menuItems = document.getElementsByClassName('menu-item');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseover', function() {
        this.style.fontWeight('bold');
    })

    menuItems[i].addEventListener('mouseout', function() {
        this.style.fontWeight('normal');
    })
}

