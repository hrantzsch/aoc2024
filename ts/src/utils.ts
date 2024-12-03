import * as fs from 'fs';
import * as path from 'path';

export function loadInput(day: number): string {
  const filePath = path.join(__dirname, '..', 'input', `day${day}.txt`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file for day ${day} not found at ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

