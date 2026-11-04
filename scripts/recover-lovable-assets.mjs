import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (file.endsWith('.asset.json')) {
      const asset = JSON.parse(await readFile(file, 'utf8'));
      const response = await fetch('https://dayoolagunju.lovable.app' + asset.url);
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error('Asset unavailable: ' + file);
      const destination = path.join('public', asset.url);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, Buffer.from(await response.arrayBuffer()));
      console.log('Recovered', asset.original_filename);
    }
  }
}
await walk('src/assets');
