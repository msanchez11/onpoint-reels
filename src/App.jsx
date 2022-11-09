import { useState } from "react";
import "./App.css";
import ModalLogin from "./components/ModalLogin";
import ModalReels from "./components/ModalReels";
import StoriesCarousel from "./components/StoriesCarousel";
import ShortsCarousel from "./components/ShortsCarousel";

function App() {
  const [openModalReels, setOpenModalReels] = useState(false);
  const toggleOpenReels = () => setOpenModalReels(!openModalReels);
  const [goToSlide, setGoToSlide] = useState(0);

  const [openModalLogin, setOpenModalLogin] = useState(false);
  const toggleOpenLogin = () => setOpenModalLogin(!openModalLogin);

  return (
    <div id="stories-app" className="stories-body">
      <StoriesCarousel
        setGoToSlide={setGoToSlide}
        changeOpenReels={toggleOpenReels}
        changeOpenLogin={toggleOpenLogin}
      />
      <ShortsCarousel
        setGoToSlide={setGoToSlide}
        changeOpenReels={toggleOpenReels}
        changeOpenLogin={toggleOpenLogin}
      />
      <ModalReels
        isOpen={openModalReels}
        openInSlideX={goToSlide}
        changeOpenReels={toggleOpenReels}
        changeOpenLogin={toggleOpenLogin}
      />
      <ModalLogin isOpen={openModalLogin} changeOpenLogin={toggleOpenLogin} />
    </div>
  );
}

export default App;
