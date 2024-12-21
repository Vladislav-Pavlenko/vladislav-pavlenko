interface TimeAgoProps {
  date: Date;
}

export const TimeAgo: React.FC<TimeAgoProps> = ({ date }) => {
  const diffInSeconds = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  );

  const intervals = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ] as const;

  const [label, count] = intervals.find(
    ([_, seconds]) => diffInSeconds >= seconds
  ) || ["second", 0];

  const timeAgo = `${Math.floor(diffInSeconds / count)} ${label}${
    Math.floor(diffInSeconds / count) > 1 ? "s" : ""
  } ago`;

  return <span>{timeAgo}</span>;
};
