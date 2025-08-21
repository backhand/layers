import type { Tool } from "../../src/agent/sources/tools";
import fs from 'fs/promises';

export async function readfile(tool: Tool, args: Record<string, any>) {
  const { file } = args;
  const content = await fs.readFile(file, 'utf8');
  return {
    ok: true,
    type: 'readfile',
    file,
    output: content,
  };
}