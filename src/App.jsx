import { HashRouter } from "react-router-dom";
import Navigation from "./pages/navigation/navigation";
import MobileNav from "./pages/navigation/mobileNav";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <MobileNav />
    </HashRouter>
  );
}

export default App;
