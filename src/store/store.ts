import { atom } from "nanostores";
import type { AgregationsStore, AuthStore, MenuStore } from "@/interfaces";

export const uiStore = atom({ modal: false });

export const authStore = atom<AuthStore>({ session: null });

export const changeStore = atom({ moneda:'CUP', value: 1 });

export const agregationsStore = atom<AgregationsStore>({ agregations: undefined });

export const menuStore = atom<MenuStore>({ categories: [] });