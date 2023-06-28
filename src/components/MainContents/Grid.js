import Card from "./Card"
import Cards from "./Cards"

export default function Grid() {
    return (
        <div className="Grid">
            {Cards.map(card => (
                <Card card={card} key={card.id}/>
            ))}
        </div>
    )
}