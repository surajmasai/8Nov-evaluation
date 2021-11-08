
function navbar() {

    return `<header id="navbar">
        <div id="navbar_cont">
            <a href="index.html"><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fVkmU7uovXtcZUc2GYM6BSS6nQV9vTh20w&usqp=CAU"
                    alt="" id="logo_img"></a>
            <div>
                <input type="text" id="query" /><span><button id="btn">Search</button></span>
            </div>
            <div id="options">
                <h2><a href="login.html">login</a></h2>
                <h2><a href="signip.html">Signup</a></h2>
                <h2><a href="cart.html">cart</a></h2>

            </div>
        </div>
    </header>`
}

export default navbar