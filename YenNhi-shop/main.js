function loginHandler() {
    const loginBtn = document.querySelector('.btn-login')
    const app = document.querySelector('.app')
    const loginForm = document.querySelector('.auth-form')


    loginBtn.addEventListener('click', () => {
        app.classList.remove('dnone')
        
        loginForm.classList.add('dnone')
        localStorage.setItem('isLoggedIn', true)
    })
}


function logoutHandler() {
    const logoutBtn = document.querySelector('.logout')
    const app = document.querySelector('.app')
    const loginForm = document.querySelector('.auth-form')


    logoutBtn.addEventListener('click', () => {
        app.classList.add('dnone')
        loginForm.classList.remove('dnone')

        localStorage.setItem('isLoggedIn', false)
    })
}

function main() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn === 'false'){
        const app = document.querySelector('.app')
        const loginForm = document.querySelector('.auth-form')

        app.classList.add('dnone')
        loginForm.classList.remove('dnone')
    } else {
        const app = document.querySelector('.app')
        const loginForm = document.querySelector('.auth-form')

        app.classList.remove('dnone')
        loginForm.classList.add('dnone')
    }


    const productList = document.querySelectorAll('.home-product .product')
    const eyesLink = document.querySelector('.category-item__link--eyes')
    const faceLink = document.querySelector('.category-item__link--face')
    const lipsLink = document.querySelector('.category-item__link--lips')
    const allLink = document.querySelector('.category-item__link--all')


    const categorylist = document.querySelectorAll('.category-item')

    categorylist?.forEach(category => {
        category.addEventListener('click', (e) => {
            const currentActive = document.querySelector('.category-item.category-item--active')
            if(currentActive) {
                currentActive.classList.remove('category-item--active')
            }

            console.log(e.currentTarget);
            
            e.currentTarget.classList.add('category-item--active')
        })
    })

    eyesLink?.addEventListener('click', () => {
        productList.forEach(product => {
             product.setAttribute('style', 'display: block;')

            if(product.dataset.category !== 'eyes') {
                product.setAttribute('style', 'display: none;')
            }
        })
    })

    faceLink?.addEventListener('click', () => {
        productList.forEach(product => {
            product.setAttribute('style', 'display: block;')

            if(product.dataset.category !== 'face') {
                product.setAttribute('style', 'display: none;')
            }
        })
    })

    lipsLink?.addEventListener('click', () => {
        productList.forEach(product => {
            product.setAttribute('style', 'display: block;')

            if(product.dataset.category !== 'lips') {
                product.setAttribute('style', 'display: none;')
            }
        })
    })
    allLink?.addEventListener('click', () => {
        productList.forEach(product => {
            product.setAttribute('style', 'display: block;')
        })
    })


    loginHandler()
    logoutHandler()

}

document.addEventListener('DOMContentLoaded', main)