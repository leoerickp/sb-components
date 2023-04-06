import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is the message for showing in the label
   */
  label: string;

  /**
   * This is the size attribute and it is for formating it
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * this transforms uppercase all letters
   */
  allCaps?: boolean;

  /**
   * This changes the label color
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Font color customized
   */
  fontColor?: string;

  /**
   * Backgroundcolor customized
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
  ...props
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
