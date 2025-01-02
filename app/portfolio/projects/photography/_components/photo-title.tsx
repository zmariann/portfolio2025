import BackLink from "@/app/_components/back-link";

interface TitleProps {
  name: string;
}

export default function Title({ name }: TitleProps) {
  return (
    <h1 className="sm:px-10 pl-5 w-full">
      <div className="flex sm:justify-between flex-col sm:flex-row">
        <div className="sm:text-7xl text-4xl font-[family-name:var(--regonia-font)]">
          {name}
        </div>
        <div className="sm:pt-10">
          <BackLink></BackLink>
        </div>
      </div>
    </h1>
  );
}
