import { atom } from 'nanostores';

export interface AudioState {
    isPlaying: boolean;
    currentTrack: {
        title: string;
        src?: string;
        duration?: string;
    } | null;
}

export const isListeningMode = atom(false);

export const audioPlayerState = atom<AudioState>({
    isPlaying: false,
    currentTrack: null
});

export const toggleListeningMode = () => {
    isListeningMode.set(!isListeningMode.get());
};

export const setTrack = (title: string, duration?: string, src?: string) => {
    audioPlayerState.set({
        isPlaying: true,
        currentTrack: { title, duration, src }
    });
};

export const togglePlayback = () => {
    const state = audioPlayerState.get();
    if (state.currentTrack) {
        audioPlayerState.set({
            ...state,
            isPlaying: !state.isPlaying
        });
    }
};
