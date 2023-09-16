import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/home";
function App() {
 return (
  <main className="app transition-all ease-in">
    {/* <h1 className="head-text"></h1>
    <h1 className="text-3xl font-bold underlin">hello</h1> */}
     <Home/>
    <Customizer />
    <Canvas/>
  </main>
  )
}

export default App
