import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Resume from "./components/Resume";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <div className="containerApp">
        <div className="contentList">
          <Header />
          <Resume />
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;
