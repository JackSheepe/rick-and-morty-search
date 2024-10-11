import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  const fetchCharacter = async (id) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);

      const episodePromises = response.data.episode.map((epUrl) =>
        axios.get(epUrl).then((response) => response.data)
      );

      Promise.all(episodePromises)
        .then((data) => setEpisodes(data))
        .catch((error) => console.error("Ошибка при загрузке эпизода:", error));
      console.log(episodes);
    } catch (error) {
      console.error("Ошибка при загрузке персонажа:", error);
    }
  };

  if (!character) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="text-lg gap-9 flex flex-wrap flex-row md:flex-row-reverse">
      <img
        src={character.image}
        alt={character.name}
        className="max-h-64 sm:ml-auto"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Персонаж {character.name}</h1>
        <p>Статус: {character.status}</p>
        <p>Раса: {character.species}</p>
        <p>Пол: {character.gender}</p>
        <p>Место рождения: {character.origin?.name}</p>
        <p>Текущая локация: {character.location?.name}</p>
        <p>Эпизоды:</p>
        {episodes.length ? (
          <ul>
            {episodes.map((ep) => (
              <React.Fragment key={ep.episode}>
                <li className="text-sm">
                  {ep.episode} {ep.name}
                </li>
              </React.Fragment>
            ))}
          </ul>
        ) : (
          "Не указан"
        )}
      </div>
    </div>
  );
};

export default Character;
