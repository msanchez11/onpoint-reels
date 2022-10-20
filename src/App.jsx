import { useState } from "react";
import "./App.css";
import ReelsModal from "./components/ReelsModal";
import StoriesCarousel from "./components/StoriesCarousel";

function App() {
  const [openReels, setOpenReels] = useState(false);
  const toggleOpen = () => {
    setOpenReels(!openReels);
  };

  return (
    <div id="stories-app" className="stories-body">
      <StoriesCarousel changeOpenValue={toggleOpen} />
      <ReelsModal isOpen={openReels} changeOpenValue={toggleOpen} />
    </div>
  );
}

export default App;
