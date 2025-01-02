import BackLink from "@/app/_components/back-link";

interface TitleProps {
  name: string;
}

export default function Title({ name }: TitleProps) {
  return (
    <h1 className="px-10 w-full">
      <div className="flex justify-between">
        <div className="text-7xl font-[family-name:var(--regonia-font)]">{name}</div>
        <div className="pt-10"><BackLink></BackLink></div>
      </div>
    </h1>
  );
}
