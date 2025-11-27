interface PageSubtitleProps {
  title: string;
  className?: string;
}

const PageSubtitle = (params: PageSubtitleProps) => {
  const { title } = params;
  return (
    <div className="px-5 pt-12.5 w-full border-gradient-subtitle">
      <div className="border-l-10 border-primary pl-2.5 text-5xl font-light">{title}</div>
    </div>
  )
}

export default PageSubtitle