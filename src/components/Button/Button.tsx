import React from 'react';

interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  size?: string;
}

const Button: React.FunctionComponent<IButtonProps> = (props): JSX.Element => {
  const { children, backgroundColor, color, style } = props;

  let _style: React.CSSProperties = style || {};

  /** Override defaults */
  if (backgroundColor) _style.backgroundColor = backgroundColor;
  if (color) _style.color = color;

  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};

export default Button;
