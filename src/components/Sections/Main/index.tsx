interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  const { children, ...rest } = props;
  return (
    <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center" {...rest}>
      {children}
    </section>
  );
}
