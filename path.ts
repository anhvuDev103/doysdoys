import fs from 'fs';
import path from 'path';

export function isFolder(dirname: string): boolean {
  return dirname.indexOf('.') === -1;
}

export function getObjectAlias() {
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
}
