export interface TextBlockProps {
  size: "large" | "medium" | "small";
  text: string;
  className?: string;
  ariaLabel?: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}
