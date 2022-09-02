module.exports = {
  theme: {
    container: {
      center: true,
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "green-550": "#11B980",
      "blue-450": "#549DF2",
      "gray-450": "#E2E2E2",
      "gray-350": "#C4C4C4",
    }),
    extend: {
      spacing: {
        45: "11.81rem",
        74: "18.438rem",
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
      subTitle: "#505050",
      "gray-950": "#0000007A",
      "blue-450": "#549DF2",
      "gray-450": "#989898",
    }),
  },
};
