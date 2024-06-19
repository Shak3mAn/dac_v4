import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  section?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  section,
}) => {
  return (
    <div>
      <div className="flex flex-row">
        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        {section && <h2 className="mx-2 text-3xl font-semibold">/</h2>}

        {section && (
          <h2 className="flex items-end text-muted-foreground text-2xl font-semibold tracking-tight">
            {section}
          </h2>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
};
