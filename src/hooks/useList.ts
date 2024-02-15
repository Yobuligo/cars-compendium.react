import { useState } from "react";
import { IList } from "../types/IList";

export const useList = <T>(initialItems?: T[]): IList<T> => {
  const [items, setItems] = useState(initialItems ?? []);

  const append = (item: T) => {};
  const remove = (item: T) => {};

  return { items, append, remove };
};
