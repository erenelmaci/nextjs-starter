import { redirect } from 'next/navigation';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  redirect(`/${locale}/auth/sign-in`);
}
