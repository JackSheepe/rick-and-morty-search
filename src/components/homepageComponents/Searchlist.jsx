import React from "react";
import { Link } from "react-router-dom";

export default function Searchlist({ characters }) {
  return (
    <ol className="flex flex-col gap-3">
      {characters.length ? (
        characters.map((character) => (
          <li key={character.id}>
            <Link
              to={`/character/${character.id}`}
              className="grid grid-cols-6 gap-3 rounded-md bg-transparent border border-white h-10 items-center pl-2 pr-2"
            >
              <p className="col-span-2">{character.name}</p>
              <p>{character.status}</p>
              <p>{character.gender}</p>
              <p className="col-span-2">{character.species}</p>
            </Link>
          </li>
        ))
      ) : (
        <li>Вы ещё никого не нашли или Рик не дал вам найти</li>
      )}
    </ol>
  );
}
