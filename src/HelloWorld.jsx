import { useEffect } from "react";

function HelloWorld() {
  useEffect(() => {
    console.log("hello word mounted");
  }, []);

  return <h1>Hello World</h1>;
}

export default HelloWorld;
