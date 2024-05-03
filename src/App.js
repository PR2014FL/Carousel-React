import "./App.css";
import { useState } from "react";
import { photos } from "./models/photos.js";
import Card from "./components/Card";
import Button from "./components/Button";
import { symbols } from "./models/symbols.js";

function App() {
  let [count, setCount] = useState(0);
  let [currentImage, setCurrentImage] = useState(photos[count]);
  //------------------------------------- [State]

  // const changePic = () => {
  //   setCount((count += 1));
  //   console.log("Current Count: ", count);
  //   setCurrentImage(photos[count]);
  //   console.log("Current Image: ", currentImage);
  // };
  // // Cycle forward thru array
  // const reversePic = () => {
  //   setCount((count -= 1));
  //   console.log("Current Count: ", count);
  //   setCurrentImage(photos[count]);
  //   console.log("Current Image: ", currentImage);
  // };
  //Cycle back thru pics
  const changePic = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= photos.length) {
        // Reset count to 0 if it goes beyond the array length
        return 0;
      }
      return newCount;
    });
    setCurrentImage(photos[count]);
  };

  const reversePic = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount < 0) {
        // Reset count to the last index if it goes below 0
        return photos.length - 1;
      }
      return newCount;
    });
    setCurrentImage(photos[count]);
  };

  return (
    <div className="App">
      <h1> City Directory </h1>
      <Card currentImg={currentImage} />

      <div className="btnContainer">
        <Button action={reversePic} icon={symbols.left} />
        <Button action={changePic} icon={symbols.right} />
      </div>
    </div>
  );
}

export default App;
