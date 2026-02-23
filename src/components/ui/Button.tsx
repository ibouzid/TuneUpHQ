interface ButtonProps {
  className?: string;
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export function Button({ className, label, type, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} type={type} className={className}>
      {label}
    </button>
  );
}
