export default function Button({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        onClick && onClick();
      }}
      className={`bg-emerald-600 px-4 py-2 rounded-lg text-xl ${className}`}
    >
      {children}
    </button>
  );
}
