import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const AgentView = () => {
  const [agentBackGroundImage, setAgentBackGroundImage] = useState("");
  const { displayName } = useParams();
  console.log(displayName);

  const { data } = useLoaderData();
  return <div>Agent</div>;
};

export const agentLoader = async ({ params }) => {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${params.uuid}`
  );
  const data = await response.json();
  return data;
};
