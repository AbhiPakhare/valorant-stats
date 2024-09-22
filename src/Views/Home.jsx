import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AgentCard } from "../components/AgentCard";

export const Home = () => {
  const { data } = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-10">
        {data.map((agent) => {
          return <AgentCard key={agent.uuid} agent={agent} />;
        })}
      </div>
    </>
  );
};

export const homeLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  const data = await response.json();
  return data;
};
