import BasicPanel from './BasicPanel';

export default function ErrorInfoPanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicPanel className="bg-red-50">{children}</BasicPanel>;
}
