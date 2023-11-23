import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function CardTest({ movieDetails }) {
  const navigate = useNavigate();
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const img_300 = "https://image.tmdb.org/t/p/w300";

  const handleCardClick = () => {
    navigate(`/${movieDetails.id}`, { state: { data: movieDetails } });
  };

  return (
    <Card
      onClick={handleCardClick}
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={movieDetails.poster_path ? `${img_300}/${movieDetails.poster_path}` : unavailable}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={movieDetails.title}
        description="This is the description"
      />
    </Card>
  );
}

export default CardTest;
