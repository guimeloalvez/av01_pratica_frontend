interface ButtonProps {
  text?: String;
  backgroundColor: String;
  textColor: String;
  fontSize: String;
  link?: String;
  isBorder?: boolean;
  border?: String;
  emoji?: String;
}

export default function Button({
  text,
  backgroundColor,
  textColor,
  fontSize,
  link,
  isBorder,
  border,
  emoji,
}: ButtonProps) {
  return (
    <a
      href={`${link}`}
      className={`${emoji} block ${isBorder ? border : ""} ${backgroundColor} ${textColor} font-medium ${fontSize} py-2.5 px-8 rounded-full shadow-2xl`}
    >
      {text}
    </a>
  );
}
