import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface NavItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export function NavItem({ title, path, icon }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
        isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
