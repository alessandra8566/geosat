import { cn } from "@/utils/shadcn";

interface PageSubtitleProps {
  title: string;
  className?: string;
  border?: boolean;
}

const PageSubtitle = (params: PageSubtitleProps) => {
  const { title, border = true } = params;
  return (
    <div className={cn("px-5 pt-12.5 w-full", { " border-gradient-subtitle": border })}>
      <div className="border-l-10 border-primary pl-2.5 text-5xl font-light">{title}</div>
    </div>
  )
}

export default PageSubtitle