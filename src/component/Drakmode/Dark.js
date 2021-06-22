import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";
import Navbar from "../Navbar/Navbar"
import { FaRegMoon, FaSun } from "react-icons/fa";


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function Dark() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const isDark = theme === "dark";

    return (
        <div>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand me-2 ">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/122/122933.png"
                                    height="22"
                                    alt="surl"/><h5 style={{color:"#d0ae06"}}>SURL</h5>
                            </a>
                            <button
                                className="btn btn-dark px-3"
                                onClick={themeToggler}>{isDark ? <FaSun /> : <FaRegMoon />}
                            </button>
                        </div>
                    </nav>
                    <Navbar />
                </StyledApp>
            </ThemeProvider>
        </div>
    )
}

export default Dark
