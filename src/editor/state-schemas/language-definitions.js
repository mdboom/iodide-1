// This defines the "built-in" language definitions

export const jsLanguageDefinition = {
  pluginType: "language",
  languageId: "js",
  displayName: "Javascript",
  codeMirrorMode: "javascript",
  codeMirrorModeLoaded: true,
  module: "window",
  evaluator: "eval",
  keybinding: "j",
  url: ""
};

const pyLanguageDefinition = {
  languageId: "py",
  displayName: "Python",
  codeMirrorMode: "python",
  keybinding: "p",
  url: `https://pyodide.netlify.com/pyodide.js`,
  module: "pyodide",
  evaluator: "runPython",
  asyncEvaluator: "runPythonAsync",
  pluginType: "language"
};

export const languageDefinitions = {
  py: pyLanguageDefinition,
  js: jsLanguageDefinition
};
