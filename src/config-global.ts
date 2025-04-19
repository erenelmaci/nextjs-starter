import packageJson from "../package.json"

export type ConfigValue = {
  appName: string
  appVersion: string
  serverUrl: string
}

export const CONFIG: ConfigValue = {
  appName: packageJson.name,
  appVersion: packageJson.version,
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? "",
}
