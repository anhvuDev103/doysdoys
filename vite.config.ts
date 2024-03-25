import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function getAlias() {
  const rootProject = process.cwd();

  const entriesAlias = fs
    .readdirSync(path.resolve(rootProject, 'src/'))
    .filter(isFolder)
    .map((folderName) => {
      const alias = '@' + folderName;
      const realPath = path.resolve(rootProject, 'src/' + folderName);
      return [alias, realPath];
    });

  return Object.fromEntries(entriesAlias);

  function isFolder(dirname: string): boolean {
    return dirname.indexOf('.') === -1;
  }
}

const foldersName = getAlias();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: foldersName,
  },
});
