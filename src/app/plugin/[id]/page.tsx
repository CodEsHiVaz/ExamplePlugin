// "use client";
import React from "react";
import { loadPlugin } from "../../utils"; // Replace with imports

const PluginPage = async ({ params }: { params: { id: string } }) => {
  //   console.log("🚀 ~ PluginPage ~ pluginId:", params.id);
  //   const installedPlugins = getInstalledPlugins();
  const PluginComponent = (await loadPlugin(params.id)) as any; //  as Assuming dynamic loading
  console.log("🚀 ~ PluginPage ~ PluginComponent:", PluginComponent);

  if (!PluginComponent) {
    return <div>Error loading plugin.</div>;
  }
  //   return <div>Error loading plugin.</div>;

  return <PluginComponent />;
};

export default PluginPage;
