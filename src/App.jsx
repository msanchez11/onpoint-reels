import { useState } from "react";
import "./App.css";
import ModalLogin from "./components/ModalLogin";
import StoriesCarousel from "./components/StoriesCarousel";
import ShortsCarousel from "./components/ShortsCarousel";

function App() {
  const [openReels, setOpenReels] = useState(false);
  const toggleOpen = () => {
    setOpenReels(!openReels);
  };

  return (
    <div id="stories-app" className="stories-body">
      <StoriesCarousel changeOpenValue={toggleOpen} />
      <ShortsCarousel changeOpenValue={toggleOpen} />
      <ModalLogin isOpen={openReels} changeOpenValue={toggleOpen} />
    </div>
  );
}

export default App;
