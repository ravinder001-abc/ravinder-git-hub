import React, { useState, useEffect } from "react";
import Test from '/components/Test';

export default function App() {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div>
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }}
            >
                <ul className="top-navbar-nav ml-auto">
                    <div className="top-nav-socal-icon">

                        <li>
                            <Test />
                        </li>
                        <li className='hdfugsdgas-img'>
                            <img src="https://www.purplegarden.co/packs/media/src/app/components/header/img/header_logo-a158b94f05c86b8b50e616c20b9421e6.svg" alt="Website-logo" width="300" height="auto" />
                        </li>
                        <div className="classes-module__headerTitle___3NFzC" style={{ color: 'rgb(255, 255, 255)' }} >purple garden<div class="classes-module__headerTitleTM___3OmKa">TM</div></div>
                    </div>
                    <div className="top-nav-login-register">
                        <li>
                            <div className="classes-modul"><button type="button" className="classes-modu" >Sign in</button>
                                <button type="button" className="classes-mo">Join</button></div>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
