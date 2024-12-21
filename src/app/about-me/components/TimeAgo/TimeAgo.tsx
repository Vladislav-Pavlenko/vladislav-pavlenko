interface TimeAgoProps {
  date: Date;
}

export const TimeAgo: React.FC<TimeAgoProps> = ({ date }) => {
  const diffInSeconds = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  );

  const intervals = [
    ["рік", 31536000],
    ["місяць", 2592000],
    ["день", 86400],
    ["година", 3600],
    ["хвилина", 60],
    ["секунда", 1],
  ] as const;

  const [label, count] = intervals.find(
    ([, seconds]) => diffInSeconds >= seconds
  ) || ["секунда", 0];

  const timeAgo = `${Math.floor(diffInSeconds / count)} ${label}${
    Math.floor(diffInSeconds / count) > 1 ? "и" : ""
  } тому`;

  return <span>{timeAgo}</span>;
};
