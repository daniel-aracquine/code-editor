import { loader } from "@monaco-editor/react";

const defineTheme = (theme) => {
    return new Promise((res) => {
        Promise.all([
          loader.init(),
          import(`monaco-themes/themes/${theme.label}.json`),
        ]).then(([monaco, themeData]) => {
          monaco.editor.defineTheme(theme.value, themeData);
          res();
        });
      });
  };
  
  export { defineTheme };