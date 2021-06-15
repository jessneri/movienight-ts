import type { PropsWithChildren, ReactNode } from "react";
import React, { createContext, useContext } from "react";
import { useApi } from "./ApiStore";

interface Stores {
  apiStore: ReturnType<typeof useApi>;
}

const storesCtx = createContext<Stores | null>(null);

export function useStores() {
  return useContext(storesCtx)!;
}

export function StoresProvider(props: PropsWithChildren<ReactNode>) {
  const apiStore = useApi();

  return <storesCtx.Provider value={{ apiStore }}>{props.children}</storesCtx.Provider>;
}
