interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to mx-auto rounded-full" />
      {subtitle && (
        <p className="mt-5 text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
