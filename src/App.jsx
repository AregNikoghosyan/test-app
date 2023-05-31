import React, { useEffect, useState } from "react";
import { NightModeProvider } from "./components/NightMode";
import ToggleButton from "./components/ToggleButton";
import Content from "./components/Content";
import Modal from "./components/Modal";
import Slide from "./components/Slide";
import Img1 from "./assets/images/1.webp";
import Img2 from "./assets/images/2.webp";
import Img3 from "./assets/images/3.webp";
import Img4 from "./assets/images/4.webp";
import Img5 from "./assets/images/5.webp";
import Img6 from "./assets/images/6.webp";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];
  return (
    <>
      <NightModeProvider>
        <ToggleButton />
        <Content />
      </NightModeProvider>
      {/* <button onClick={() => setIsOpen(true)}>OPEN MODAL</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="info"></div>
      </Modal> */}
      {/* <Slide /> */}
    </>
  );
};

export default App;
