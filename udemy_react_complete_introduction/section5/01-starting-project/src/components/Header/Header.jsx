import iconImg from "../../assets/investment-calculator-logo.png"
import "./Header.css"

export default function Header(){
    return(
        <header>
            <img src={iconImg}></img>
            <h1>React Investment Calculator</h1>
        </header>
    )
}