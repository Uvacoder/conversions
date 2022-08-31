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
    <a href={href} target="_blank" rel="noreferrer noopener">
      <div className="flex items-center gap-1 border-b border-b-blue-700 text-blue-700">
        {children}
        {showIcon && <ExternalLinkIcon />}
      </div>
    </a>
  );
}
