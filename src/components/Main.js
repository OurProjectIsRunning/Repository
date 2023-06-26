import "./styles/Main.scss"
import SubHeader from "./MainContents/SubHeader"
import Grid from "./MainContents/Grid";
import MainHeader from "./MainContents/MainHeader";

function Main() {
    return (
        <div className="Main">
            <MainHeader />
            <SubHeader />
            <Grid />
        </div>
    )
}

export default Main;