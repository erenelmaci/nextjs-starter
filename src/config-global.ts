import packageJson from '../package.json';
import { paths } from './routes/paths';

export type ConfigValue = {
  appName: string;
  appVersion: string;
  serverUrl: string;
};

export const CONFIG: ConfigValue = {
  appName: packageJson.name,
  appVersion: packageJson.version,
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
};

export const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;

export const PATH_AFTER_LOGIN = paths.dashboard.root;

export async function getPageMetadata(params: { locale: string }, page: string) {
  const messages = (await import(`@/i18n/messages/${params.locale}.json`)).default;

  return {
    title: `${CONFIG.appName} - ${messages.dashboard[page]}`,
    description: messages.metadata.description,
  };
}
