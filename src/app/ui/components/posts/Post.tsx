import Link from "next/link";

export default function Post({
  id,
  title,
  content,
  date,
  isDetailPage = true,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
  isDetailPage?: boolean;
}) {
  return (
    <div key={id} className="border border-gray-200 p-4 my-4">
      {isDetailPage ? (
        <h2>{title}</h2>
      ) : (
        <Link
          href={`/blog/post/${id}`}
          className={isDetailPage ? "inherit" : `text-blue-500`}
        >
          <h2>{title}</h2>
        </Link>
      )}
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
    </div>
  );
}
