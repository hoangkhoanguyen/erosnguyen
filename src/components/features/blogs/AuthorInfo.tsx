import Image from "next/image";

interface AuthorInfoProps {
  name: string;
  avatar: string;
  publishedAt: string;
  readTime: string;
}

export default function AuthorInfo({
  name,
  avatar,
  publishedAt,
  readTime,
}: AuthorInfoProps) {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className=" flex flex-col gap-0">
        <span className="text-lg text-primary">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 ">
            Published {publishedAt}
          </span>
          <span className="select-none text-gray-400">&bull;</span>
          <span className="text-sm text-gray-400 ">{readTime}</span>
        </div>
      </div>
    </div>
  );
}
