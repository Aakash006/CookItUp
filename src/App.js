import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="logo-link" to={"/"}>
          <h1 className="logo">
            CookItUp
            <ImSpoonKnife className="knife" />
          </h1>
        </Link>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
