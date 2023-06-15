import "./styles/Main.scss"
import Cards from "./MainContents/Cards"
import Card from "./MainContents/Card";

function Main() {
    return (
        <div className="Main">
            {Cards.map(card => (
                <Card card={card} key={card.id}/>
            ))}
        </div>
    )
}

export default Main;