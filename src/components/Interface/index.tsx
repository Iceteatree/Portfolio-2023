import AboutSection from '../Sections/About';
import Section from '../Sections/Main';
import SkillsSection from '../Sections/Skills';

function Interface() {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
}

export default Interface;
