
type Props = {
  image: string;
  size?: number;
};

export default function Avatar({ image, size }: Props) {
  const sizeAvatar = size || 147;

  return (
    <img
      src={image}
      alt="avatar"
      className="avatar"
      style={{ width: `${sizeAvatar}px`, height: `${sizeAvatar}px` }}
    />
  );
}
