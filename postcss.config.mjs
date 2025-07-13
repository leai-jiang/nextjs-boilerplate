const config = {
  plugins: [
    "@tailwindcss/postcss",
    [
      "postcss-pxtorem",
      {
        rootValue: 16, // 1rem = 16px
        propList: ["*"], // 所有属性都转
      },
    ],
  ],
};

export default config;
