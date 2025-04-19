import { PATH_AFTER_LOGIN } from '@/config-global';
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect(PATH_AFTER_LOGIN);
}
