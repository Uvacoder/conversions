import { ReactComponent as ExternalLinkIcon } from '@assets/external-link.svg';

export default function ExternalLink({
  href = '/',
  children,
  showIcon = true,
}: {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
}) {
  return (
    <a href={href}>
      <div className="flex items-center border-b border-b-blue-700 text-blue-700">
        {children}
        {showIcon && <ExternalLinkIcon />}
      </div>
    </a>
  );
}
