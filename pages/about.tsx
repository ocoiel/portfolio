import { AnimatedPage } from "../components/AnimatedPage";
import { Container } from "../components/Container";

function About() {
  return (
    <AnimatedPage>
      <Container>
        <section className="flex">
          <h1 className="text-4xl">Sobre mim...</h1>
        </section>
      </Container>
    </AnimatedPage>
  );
}

export default About;
