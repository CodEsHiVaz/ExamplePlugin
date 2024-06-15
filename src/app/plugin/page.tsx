"use client";
import React, { useState, useEffect } from "react";
import { getInstalledPlugins, installPlugin } from "../utils"; // Replace with actual function
import { IPlugin } from "../type";

const HomePage: React.FC = () => {
  const [plugins, setPlugins] = useState<IPlugin[]>([]);

  useEffect(() => {
    const getPlugins = async () => {
      const fetchedPlugins = await getInstalledPlugins();
      setPlugins(fetchedPlugins);
    };

    getPlugins();
  }, []);

  return (
    <div>
      <h1>Available Plugins</h1>
      <ul>
        {plugins.map((plugin) => (
          <li key={plugin.id}>
            <h2>{plugin.name}</h2>
            {/* <p>{plugin.description}</p> */}
            {!plugin.isInstalled && (
              <button onClick={() => installPlugin(plugin.id)}>Install</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
