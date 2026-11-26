import fs from 'fs';
import path from 'path';

// Slug mapping: project.slug -> case study key
const SLUG_MAP = {
  'sipasi-pdam-surakarta': 'sipasi-pdam-surakarta',
  'nusa-terminal': 'nusaterminal-ai-investor',
  'fed-healthcare': 'federated-healthcare-ai',
  'synexa-stroke': 'synexa-stroke-rehab',
  'seger-exergame': 'seger-exergame-pose',
  'girantra-ai': 'girantra-agritech-ai'
};

const CONTENT_DIR = path.resolve('content', 'projects');

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

console.log('Target directory created:', CONTENT_DIR);
