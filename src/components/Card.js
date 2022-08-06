import Bio from "./Bio.js"
import About from "./About"
import Interests from "./Interests"

export default function Card() {
  return (
    <div>
      <Bio />
      <About />
      <Interests />
    </div>
  );
}
