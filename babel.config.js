module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ['@babel/plugin-proposal-export-namespace-from'],
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '@Navigation': './navigation',
            '@Components': './components',
            '@Screens': './screens',
            '@Assets': './assets',
            '@Utils': './utils'
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./']
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
