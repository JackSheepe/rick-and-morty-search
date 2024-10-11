import React, { useEffect, useState } from "react";

export default function Searchform({ onSubmit, params, setParams }) {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData.set(name, value);
    setParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event);
      }}
      className="grid grid-cols-2 grid-rows-4 gap-5"
    >
      <div className="col-span-full flex flex-col">
        <label htmlFor="name" className="mb-2">
          Имя персонажа
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Rick"
          className="rounded-md bg-transparent border border-white h-10 cursor-pointer appearance-none"
          onChange={handleChange}
          value={params.name || ""}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="status" className="mb-2">
          Жив?
        </label>
        <select
          name="status"
          id="status"
          className="rounded-md bg-transparent border border-white h-10 cursor-pointer appearance-none"
          onChange={handleChange}
          value={params.status || ""}
        >
          <option className="text-black" value=""></option>
          <option className="text-black" value="alive">
            Жив
          </option>
          <option className="text-black" value="dead">
            Мёртв
          </option>
          <option className="text-black" value="unknown">
            Неизвестно
          </option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="species" className="mb-2">
          Раса
        </label>
        <select
          name="species"
          id="species"
          className="rounded-md bg-transparent border border-white h-10 cursor-pointer"
          onChange={handleChange}
          value={params.species || ""}
        >
          <option className="text-black" value=""></option>
          <option className="text-black" value="human">
            Человек
          </option>
          <option className="text-black" value="alien">
            Пришелец
          </option>
        </select>
      </div>
      <div className="col-span-full flex flex-col">
        <label htmlFor="episode" className="mb-2">
          Эпизод
        </label>
        <input
          type="text"
          name="episode"
          id="episode"
          placeholder="33"
          className="rounded-md bg-transparent border border-white h-10"
          onChange={handleChange}
          value={params.episode || ""}
        />
      </div>
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="col-span-full w-full h-10 bg-white text-black rounded-md transition hover:bg-gray-400 hover:text-white"
      >
        Найти
      </button>
    </form>
  );
}
