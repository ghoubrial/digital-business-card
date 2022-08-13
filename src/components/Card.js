import Bio from "./Bio.js"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <Bio />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
