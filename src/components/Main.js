import "./styles/Main.scss";
import MainHeader from "./MainContents/MainHeader";
import SubHeader from "./MainContents/SubHeader";
import Grid from "./MainContents/Grid";

function Main() {
  return (
    <div className="Main">
      <MainHeader />
      <SubHeader />
      <Grid />
    </div>
  );
}

export default Main;
