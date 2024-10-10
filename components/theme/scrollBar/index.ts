export const scrollBar = {
  "@supports (-moz-appearance:none)": {
    "*": {
      scrollbarWidth: "thin",
    },
  },

  "::-webkit-scrollbar": {
    width: 12,
    height: 12,
  },

  "::-webkit-scrollbar-track": {
    backgroundColor: "#FFF",
  },

  "::-webkit-scrollbar-track:hover": {
    backgroundColor: "#F6F8FA",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#666666",
    border: "4px solid transparent",
    borderRadius: 9,
    backgroundClip: "content-box",
  },
};
