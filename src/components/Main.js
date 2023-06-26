import "./styles/Main.scss"
import SubHeader from "./MainContents/SubHeader"
import Grid from "./MainContents/Grid";

function Main() {
    return (
        <div className="Main">
            <SubHeader />
            <Grid />
        </div>
    )
}

export default Main;