import "../styles/header.css"

function Header(){
    return(
        <>
         <header id="hero">

        <nav id="navbar">
            <div id="logo">
                <div class="logo-circle">l</div>
            <div id="logo-text">
                <h2>Veyora</h2>
                <p>TRAVEL AND TOURS</p>
            </div>
            </div>
        
            <div id="nav-links"a>
                <a href="home.html">HOME</a>
                <a href="destination.html">Travel Guides</a>
                <a href="hotels.html">HOTELS</a>
                <a href="">BLOG</a>
                
        </div>
        <div id="cta">
        <button id="login-btn">LOG IN/SIGN UP</button>
        </div>
    </nav>

    </header>
    </>
    )
}

export default Header