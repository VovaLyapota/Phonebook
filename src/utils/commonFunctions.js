import copyTextToClipboard from 'copy-text-to-clipboard';
import { Notify } from 'notiflix';

export const copy = (
  copiedText,
  message = 'Clicked element copied to clipboard!'
) => {
  copyTextToClipboard(copiedText);
  Notify.info(message);
};

export const getViewportWidth = () => window.innerWidth;

export const checkTheSameNames = (array, selectedName) => {
  return array.some(({ name }) => name === selectedName);
};
