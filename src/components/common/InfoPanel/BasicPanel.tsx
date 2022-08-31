export default function ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mr-auto bg-blue-50 px-4 py-2 text-sm rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}
