import "./styles/Main.scss"
import Cards from "./MainContents/Cards"

function Main() {
    return (
        <div className="Main">
            {Cards.map(card => (
                <div className="card" key={card.id}>
                    <a className="linkimg" href={card.link}>
                        <div className="imgholder">
                            <img className="img" src={card.img} alt={card.title}/>
                        </div>
                    </a>
                    <div className="texts">
                        <a className="linktext" href={card.link}>
                            <h4 className="title">{card.title}</h4>
                            <div className="content">
                                <p>{card.content}</p>
                            </div>
                        </a>
                        <div className="info">
                            <span>{card.date}</span>
                            <span className="seperator">·</span>
                            <span>{card.comments}개의 댓글</span>
                        </div>
                    </div>
                    <div className="foot">
                        <a className="user" href={card.link}>
                            <img className="userimg" src={card.userinfo.userimg} alt={card.userinfo.username} />
                            <span className="username">by {card.userinfo.username}</span>
                        </a>
                        <div className="likes">
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                            {card.likes}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main;