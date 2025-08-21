import path from "path";
import type { Tool } from "../../src/agent/sources/tools";
import fs from 'fs/promises';

// TODO: Handle fs operations through taskcontext to ensure access restrictions are enforced

export async function writefile(tool: Tool, args: Record<string, any>) {
  console.log(`writefile: ${args.file}`);
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