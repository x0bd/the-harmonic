import { atom } from 'nanostores';

export const isSearchOpen = atom(false);

export const toggleSearch = () => {
    isSearchOpen.set(!isSearchOpen.get());
};
