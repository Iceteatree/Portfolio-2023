import Image from 'next/image';
import { SKILLS } from '@/constants/skills';
import Section from '../Main';

export default function SkillsSection() {
  return (
    <Section>
      <h1>Skills</h1>
      {SKILLS.map((skill) => (
        <div className="flex flex-row justify-evenly" key={skill.item}>
          <div>
            <Image src={skill.iconURL} alt={`${skill.title} icon`} width={20} height={20} />
          </div>
          <p>
            {skill.title}
            {' '}
            -
            {' '}
            {skill.proficiency}
            %
          </p>
        </div>
      ))}
    </Section>
  );
}
