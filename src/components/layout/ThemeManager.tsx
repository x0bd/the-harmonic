import React, { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isListeningMode } from '../../store/audioStore';

export const ThemeManager = () => {
    const $isListeningMode = useStore(isListeningMode);

    useEffect(() => {
        if ($isListeningMode) {
            document.documentElement.classList.add('listening-mode');
        } else {
            document.documentElement.classList.remove('listening-mode');
        }
    }, [$isListeningMode]);

    return <></>;
};
