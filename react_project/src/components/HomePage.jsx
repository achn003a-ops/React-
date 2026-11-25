
import React, { useState } from 'react';
import "../Styles/First.css";

const HomePage = () => {

    const [login, setlogin] = useState(false);
    const [name, setname] = useState("");

    function logedin() {
        let username = prompt("Enter your name");

        if (username && username.trim() !== "") {
            setname(username);
            setlogin(true);
        }
    }

    function logedout() {
        setlogin(false);
        setname("");
    }

    return (
        <>
            {login ? (
                <>
                    <header>
                        Welcome {name}
                    </header>

                    <div className="navbar">
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Explore</a>
                            <a href="#">About</a>
                            <a href="#">More</a>

                            <button onClick={logedout}>
                                Logout
                            </button>
                        </nav>
                    </div>

                    <div className="herosection">
                        <img src="user.jpg" alt="User" />
                        <p>Welcome {name}</p>
                    </div>
                </>
            ) : (
                <>
                    <header>
                        Please Login
                    </header>

                    <div>
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Explore</a>

                            <button onClick={logedin}>
                                Login
                            </button>
                        </nav>
                    </div>

                    <div className="herosection">
                        <img src="user.jpg" alt="User" />
                        <p>Welcome User</p>
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage
