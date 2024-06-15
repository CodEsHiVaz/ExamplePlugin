import { v4 as uuidv4 } from "uuid"; // Replace with storage logic
import { IPlugin } from "./type";

export const installPlugin = async (pluginId: string) => {
  const installedPlugins = await getInstalledPlugins();
  const plugin = installedPlugins.filter(
    (el) => el.id == pluginId && el.isInstalled == true
  )[0];

  if (!plugin) {
    const newPlugin: IPlugin = {
      id: pluginId,
      name: `Sum Plugin`, // Replace with actual plugin name
      path: "../AllPlugins/SumPlugin.tsx",
      isInstalled: true,
    };

    storeInstalledPlugins(newPlugin.id); // Update storage
  }

  // Redirect or display success message (optional)
};

export const getInstalledPlugins = async () => {
  // Replace with logic to fetch installed plugins from storage
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return data as IPlugin[] ?? [];
};

export const storeInstalledPlugins = async (id: string) => {
  // Replace with logic to fetch installed plugins from storage
  const res = await fetch(`http://localhost:4000/data/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isInstalled: true }),
  });
  //   const data = await res.json();
  //   return data as IPlugin[];
};
// Replace with actual logic to load plugin code based on plugin ID
export const loadPlugin = async (pluginId: string) => {
    console.log(" ~ loadPlugin ~ pluginId:", pluginId);
    try {
      const res = await fetch(`http://localhost:4000/data/${pluginId}`);
      const plugin = (await res.json()) as IPlugin;
      console.log("🚀 ~ loadPlugin ~ plugin:", plugin)
      const pluginModule = await import(plugin.path);
      return pluginModule.default;
    } catch (error) {
      console.error("Error loading plugin:", error);
      return null;
    }
  };

// export const handlePluginRequest = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   const { pluginId } = req.query;
//   const pluginComponent = loadPlugin(pluginId as string); // Cast to string for clarity

//   if (pluginComponent) {
//     res.status(200).json(pluginComponent); // Return plugin component as JSON
//   } else {
//     res.status(404).json({ error: "Plugin not found" });
//   }
// };
