import Intro from "../components/home/Intro";
import Skills from "../components/home/Skills";
import Footer from "../components/layouts/Footer";
import Welcome from "../components/home/Welcome";
import Box from "@mui/material/Box";
import "../components/home/Intro.css"; // Import CSS file for styles
import Portfolio2 from "../components/home/CardStackingPortfolio";

// TODO Parallax effects on this page

export default function Home() {
  return (
    <Box>
      <Welcome />
      <Intro />

      <div className="parallax">

      </div>
      <Portfolio2 />
      <div className="parallax second">

</div>
      <Skills />

      <Footer />
    </Box>
  );
}
