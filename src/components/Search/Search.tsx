import React from "react";

import styles from "./Search.module.scss";
import { IoSearch, IoClose } from "react-icons/io5";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { useAppDispatch } from "@/redux/hooks";

export const Search = () => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.blur();
    search(value);
    clearSearch();
  };

  const clearSearch = () => {
    setValue("");
  };

  const search = async (cityName: string) => {
    if (!cityName) return;
    dispatch(setSearchValue(cityName));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.wrapper}>
      <div className={styles.search}>
        <div onClick={() => search(value)} className={styles.action}>
          <IoSearch className={styles.icon} />
        </div>
        <input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Search"
        />
        {value && (
          <div onClick={() => clearSearch()} className={styles.action}>
            <IoClose className={styles.icon} />
          </div>
        )}
      </div>
    </form>
  );
};
