import { AnimatedPage } from "../components/AnimatedPage";
import { NavMenu } from "../components/Navbar";

function About () {
  return (
    <AnimatedPage>
      {/* <NavMenu /> */}
      <div className="flex">
        <h1 className="text-4xl">Sobre mim</h1>
      </div>
    </AnimatedPage>
  )
}

export default About;
