import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { memo } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AgentCard = memo(function AgentCard({ agent }) {
  const { displayName, fullPortrait, fullPortraitV2, displayIconSmall, uuid } =
    agent;
  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center my-5"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-gray-500"
        style={{ backgroundImage: `url(${fullPortrait || fullPortraitV2})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-tungsten  tracking-wider leading-[1.5]"
        >
          {displayName}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          <Link to={`/agents/${uuid}/${displayName}`}>
            <IconButton
              variant="outlined"
              className="rounded-full border-white text-white"
            >
              <BsArrowRight />
            </IconButton>
          </Link>
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src={displayIconSmall}
        />
      </CardBody>
    </Card>
  );
});
