module.exports = {
  mode: 'development',
  entry: {
    ex01: './src/ex01',
    ex02: './src/ex02',
    ex03: './src/ex03',
    ex04: './src/ex04',
    ex05: './src/ex05',
    ex06: './src/ex06',
    ex07: './src/ex07',
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
