interface ButtonProps {
  text?: String;
  backgroundColor: String;
  textColor: String;
  fontSize: String;
  link?: String;
  isBorder?: boolean;
  border?: String;
}

export default function PetCard({
  text,
  backgroundColor,
  textColor,
  fontSize,
  link,
  isBorder,
  border,
}: ButtonProps) {
  return (
    <a
      href={`${link}`}
      className={`block ${isBorder ? border : ""} ${backgroundColor} ${textColor} font-medium ${fontSize} py-2.5 px-8 rounded-full shadow-2xl`}
    >
      {text}
    </a>
  );
}
