import path from "path";
import fs from 'fs/promises';

export async function writefile(args: Record<string, any>) {
  const { file, content } = args;

  // Make directory if it doesn't exist
  await fs.mkdir(path.dirname(file), { recursive: true });

  await fs.writeFile(file, content);
  return {
    ok: true,
    type: 'writefile',
    output: `Wrote to ${file}`,
  };
}