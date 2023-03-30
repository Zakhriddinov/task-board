import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/home";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <HomePage />
      </main>
    </>
  );
};

export default App;
