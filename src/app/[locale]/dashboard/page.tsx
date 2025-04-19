import { HomeView } from '@/app/[locale]/dashboard/home/components/view/home-view';
import { getPageMetadata } from '@/config-global';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return getPageMetadata(resolvedParams, 'Home');
}

export default function Page() {
  return <HomeView />;
}
