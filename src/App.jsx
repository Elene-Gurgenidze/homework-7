import { useState } from "react";
import HelloWorld from "./HelloWorld";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleHello = () => {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={toggleHello}>
        {visible ? "დამალე Hello word" : "გამოაჩინე Hello World"}
      </button>

      {visible && <HelloWorld />}
    </div>
  )
}

export default App;
