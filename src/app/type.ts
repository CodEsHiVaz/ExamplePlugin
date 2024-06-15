export interface IPlugin {
  id: string;
  name: string;
  // ... other plugin properties,
  path: string;
  isInstalled: boolean;
}
