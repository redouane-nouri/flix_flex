//TODO: work on details page for tv serie or film
import { useQuery } from "@tanstack/react-query";
import { Alert, Spin, Tag, Typography } from "antd";
import React, { useState } from "react";
import api from "../lib/axios/axios";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const DetailsCard = ({ id, endpoint }) => {
  const [video, set_video] = useState([]);
  const [is_trailer_loading, set_is_trailer_loading] = useState(true);

  const { isLoading, data, error } = useQuery({
    queryKey: [endpoint, id],
    queryFn: () =>
      api.get(`/${endpoint}/${id}`).then(async (res) => {
        const vids = await api.get(
          `/${endpoint}/${res.data.id}/videos?language=en-US`,
        );
        set_video(vids.data.results.find((video) => video.site === "YouTube"));
        return res.data;
      }),
  });

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description="Something went wrong while fetching movie details."
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="flex flex-col justify-between w-full gap-4">
      <div className="flex gap-4">
        <img
          className="rounded-xl"
          width={200}
          alt="Movie Image"
          src={`${TMDB_IMAGES_BASE_URL}/${data.poster_path}`}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Typography className="font-semibold border-b-2 mr-2">
              Title:{" "}
            </Typography>
            <Typography>{data.title}</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Status:{" "}
            </Typography>
            <Typography>{data.status}</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Budget:{" "}
            </Typography>
            <Typography>
              {data.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Revenue:{" "}
            </Typography>
            <Typography>
              {data.revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Relese Date:{" "}
            </Typography>
            <Typography>{data.release_date}</Typography>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Spoken languages:{" "}
            </Typography>
            <div>
              {data.spoken_languages.map((language, index) => (
                <Tag key={index}>{language.english_name}</Tag>
              ))}
            </div>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Categories:{" "}
            </Typography>
            <div>
              {data.genres.map((category, index) => (
                <Tag key={index}>{category.name}</Tag>
              ))}
            </div>
          </div>
          <div className="flex items-start">
            <Typography className="font-semibold border-b-2 mr-2 text-nowrap">
              Overview:{" "}
            </Typography>
            <Typography>{data.overview}</Typography>
          </div>
        </div>
      </div>

      {video ? (
        <div className="flex flex-col justify-center">
          <Typography.Title className="border-b-2" level={3}>
            Watch Trailer
          </Typography.Title>
          {is_trailer_loading && <Spin />}
          <iframe
            className={`rounded-md self-center ${is_trailer_loading ? "hidden" : "block"}`}
            width="711"
            height="400"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Trailer"
            onLoad={() => set_is_trailer_loading(false)}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Typography.Title level={4}>No trailer found</Typography.Title>
      )}
    </div>
  );
};

export default DetailsCard;
