import React from "react";
import Searchform from "../components/homepageComponents/Searchform";
import Searchlist from "../components/homepageComponents/Searchlist";

export default function Homepage({ onSubmit, params, setParams, characters }) {
  return (
    <>
      <Searchform onSubmit={onSubmit} params={params} setParams={setParams} />
      <h2 className="text-3xl mb-2">Найдено</h2>
      <Searchlist characters={characters} />
    </>
  );
}
