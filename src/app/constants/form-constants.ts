import { CONTRIBUTION_GUIDE } from "./app-constants";

export const IMAGE_SELECT = "image";
export const LINK_SELECT = "link";
export const SAVE_TEMPLATE = "save";
export const LOAD_TEMPLATE = "load";
const END_QUOTES = "```";

export const FORM_OPTIONS = {
  [IMAGE_SELECT]: {
    title: "Insert Image",
    fields: [
      {
        label: "Enter Image URL",
        name: "link"
      },
      {
        label: "Enter Image Description",
        name: "description"
      }
    ]
  },
  [LINK_SELECT]: {
    title: "Insert Link",
    fields: [
      {
        label: "Enter URL",
        name: "link"
      },
      {
        label: "Enter Description",
        name: "description"
      }
    ]
  },
};
