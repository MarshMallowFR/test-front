import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DisplayLimit } from "./DisplayLimit";

// Display photos which a title length <= to the limit in parameter

const Style = styled.div`
  color: black;
`;

const PhotosByAlbum = ({ limit, setLimit, photos }) => {
  const [customPhotos, setCustomPhotos] = useState([]);

  useEffect(() => {
    if (!photos) return;
    const customizedPhotos = photos
      .sort((a, b) => {
        return a.title.length > b.title.length;
      })
      .filter(({ title }) => title.length <= limit)
      .map(({ title, ...photo }) => ({
        ...photo,
        title: title.toUpperCase(),
        titleNbLetters: title.length,
      }));

    const albums = [];
    customizedPhotos.forEach(({ albumId, ...photo }) => {
      if (albums[albumId]?.length >= 0) {
        albums[albumId].push(photo);
      } else {
        albums[albumId] = [photo];
      }
    });
    setCustomPhotos(albums);
  }, [limit, photos]);

  return (
    <Style>
      <DisplayLimit setLimit={setLimit} limit={limit} />
      {customPhotos.map((photo, key) => {
        return (
          <div key={key}>
            {photo.map(({ title, id }) => {
              return <div key={id}>{title}</div>;
            })}
            <hr />
          </div>
        );
      })}
    </Style>
  );
};

PhotosByAlbum.propTypes = {
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotosByAlbum;
