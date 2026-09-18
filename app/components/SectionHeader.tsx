interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  number,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-sm font-semibold tracking-widest text-[#3B82F6]">
          {number}
        </span>
        <div className="flex-grow h-px bg-[#25282C]"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
