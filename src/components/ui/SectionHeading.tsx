interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary" style={{ marginBottom: '1.25rem' }}>
        {title}
      </h2>
      <div
        className="bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to rounded-full"
        style={{ width: '4rem', height: '0.25rem', marginLeft: 'auto', marginRight: 'auto' }}
      />
      {subtitle && (
        <p className="text-text-secondary text-lg leading-relaxed" style={{ marginTop: '1.25rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
