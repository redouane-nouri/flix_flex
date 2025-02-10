//TODO: work on details page for tv serie or film
import { Tag, Typography } from "antd";
import React from "react";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const DetailsCard = ({ id }) => {
  const number = 234235253;
  const categories = [
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 35,
      name: "Comedy",
    },
  ];

  const spoke_languages = [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ];
  return (
    <div className="flex flex-col justify-between w-full gap-4">
      <div className="flex gap-4">
        <img
          className="rounded-xl"
          width={200}
          alt="Movie Image"
          src={`${TMDB_IMAGES_BASE_URL}/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg`}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Typography className="font-semibold border-b-2 mr-2">
              Title:{" "}
            </Typography>
            <Typography>Moana 2</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Status:{" "}
            </Typography>
            <Typography>Released</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Budget:{" "}
            </Typography>
            <Typography>
              {number.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Reveniew:{" "}
            </Typography>
            <Typography>
              {number.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Relese Date:{" "}
            </Typography>
            <Typography>2024-11-21</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Spoken languages:{" "}
            </Typography>
            <div>
              {spoke_languages.map((language, index) => (
                <Tag key={index}>{language.english_name}</Tag>
              ))}
            </div>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Categories:{" "}
            </Typography>
            <div>
              {categories.map((category, index) => (
                <Tag key={index}>{category.name}</Tag>
              ))}
            </div>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Overview:{" "}
            </Typography>
            <Typography>
              After receiving an unexpected call from her wayfinding ancestors,
              Moana journeys alongside Maui and a new crew to the far seas of
              Oceania and into dangerous, long-lost waters for an adventure
              unlike anything she's ever faced.
            </Typography>
          </div>
        </div>
      </div>
      <Typography.Title className="border-b-2" level={3}>
        Watch Trailer
      </Typography.Title>
      <iframe
        className="rounded-md self-center"
        width="711"
        height="400"
        src="https://www.youtube.com/embed/Jr4RL-fpC7k"
        title="Trailer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DetailsCard;
