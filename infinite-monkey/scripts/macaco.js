import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/* ===== CONFIG ===== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HTML_PATH = path.join(
  ROOT_DIR,
  'src/app/gen-text/gen-text.html'
);

const LOGS_DIR = path.join(ROOT_DIR, 'logs');

const DAILY_CHARS = 1000;

const CHARS =
  'abcdefghijklmnopqrstuvwxyz';

/* ===== UTILS ===== */

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

/* ===== EXEC ===== */

// garante pasta de logs
if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

// gera texto do dia
let generated = '';
for (let i = 0; i < DAILY_CHARS; i++) {
  generated += randomChar();
}

// lê o HTML
let html = fs.readFileSync(HTML_PATH, 'utf-8');

// marcador obrigatório no HTML
const MARKER = '<pre class="macaco-text">';
const END = '</pre>';

if (!html.includes(MARKER)) {
  throw new Error(
    'Marcador <pre class="macaco-text"> não encontrado no HTML'
  );
}

// extrai o texto existente dentro do pre
const preMatch = html.match(/<pre class="macaco-text">([\s\S]*?)<\/pre>/s);
let existingText = '';

if (preMatch && preMatch[1]) {
  // remove espaços em branco no início e fim, mas mantém o conteúdo
  existingText = preMatch[1].trim();
}

// adiciona os novos caracteres ao texto existente
const allText = existingText ? `${existingText}${generated}` : generated;

// substitui o conteúdo do pre mantendo o texto anterior + novo
const newHtml = html.replace(
  /<pre class="macaco-text">[\s\S]*?<\/pre>/s,
  `${MARKER}\n${allText}\n${END}`
);

// escreve HTML atualizado
fs.writeFileSync(HTML_PATH, newHtml, 'utf-8');

// salva log diário
const logPath = path.join(LOGS_DIR, `${today()}.txt`);
fs.writeFileSync(logPath, generated, 'utf-8');

console.log(`🐒 ${today()} — ${DAILY_CHARS} caracteres escritos`);

