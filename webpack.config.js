module.exports = {
  mode: 'development',
  entry: {
    ex01: './src/ex01',
    ex02: './src/ex02',
    ex03: './src/ex03',
  },
  output: {
    path: `${__dirname}/public/scripts`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /src\/.*\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};
