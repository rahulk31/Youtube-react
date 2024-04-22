import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoContainer from "./components/VideoContainer/VideoContainer";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <VideoContainer />
      </div>
    </>
  );
}

export default App;
