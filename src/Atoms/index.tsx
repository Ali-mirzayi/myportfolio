import { atom } from 'recoil';

const DarkModeSwicher = atom({
    key: "DarkModeSwicher",
    default: true
});

const Muted = atom({
    key: 'Muted',
    default: false,
});

const Permition = atom({
    key: 'Permition',
    default: false,
});

export { DarkModeSwicher, Muted, Permition };