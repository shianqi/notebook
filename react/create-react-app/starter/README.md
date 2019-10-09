### 开启 typescript 

```bash
npx create-react-app starter --typescript --use-npm
```

### 使用 react-hot-loader

- `npm run eject`
- `npm install --save-dev react-hot-loader`
- 编辑 `config/webpack.config.js`

```
  // Process application JS with Babel.
  // The preset includes JSX, Flow, TypeScript, and some ESnext features.
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      customize: require.resolve(
        'babel-preset-react-app/webpack-overrides'
      ),

      plugins: [
+       'react-hot-loader/babel',
        [
          require.resolve('babel-plugin-named-asset-import'),
          ...
```

- 修改 `src/App.tsx`

```jsx
import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => <div>Hello World!</div>;

export default hot(module)(App);
```
