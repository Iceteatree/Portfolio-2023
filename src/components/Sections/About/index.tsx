import Section from '../Main';

export default function AboutSection() {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi there, I&apos;m
        <br />
        <span className="bg-white text-black px-1 italic">Alan</span>
      </h1>
      <p className="text-lg text-teal-400 mt-4">
        Currently a full stack developer
        <br />
        based in Cape Town.
      </p>
      <button type="button" className="bg-teal-400 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
        Contact me
      </button>
    </Section>
  );
}
