import { Dispatch, SetStateAction } from "react";

type HandleCopyType = {
  text: string;
  setCopiedClipboard: Dispatch<SetStateAction<boolean>>; // STATE FOR SHOW ANIMATION WHEN IS SAVED IN THE CLIPBOARD
};

// COPY IN CLIPBOARD
export function handleCopyClick({ text, setCopiedClipboard }: HandleCopyType) {
  navigator.clipboard.writeText(text);
  setCopiedClipboard(true);

  setTimeout(() => {
    setCopiedClipboard(false);
  }, 1500);
}
