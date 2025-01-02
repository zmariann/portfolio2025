import BackLink from "@/app/_components/back-link";
import Link from "next/link";

interface nextProjectProps {
  projectPath: string;
}

export default function NextProject({ projectPath }: nextProjectProps) {
  return (
    <div className="flex justify-between text-center mb-5 sm:mx-10 mx-5">
      <Link className="uppercase underline text-sm" href={projectPath}>
        Next photo project
      </Link>
      <BackLink></BackLink>
    </div>
  );
}
