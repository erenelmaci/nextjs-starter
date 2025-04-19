import { NavItem } from './nav-item';

interface NavSectionProps {
  subheader: string;
  items: {
    title: string;
    path: string;
    icon: React.ReactNode;
  }[];
}

export function NavSection({ subheader, items }: NavSectionProps) {
  return (
    <div className="py-2">
      <h3 className="mb-2 px-4 text-xs font-medium text-muted-foreground">{subheader}</h3>
      <div className="space-y-1 px-2">
        {items.map(item => (
          <NavItem key={item.path} title={item.title} path={item.path} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
