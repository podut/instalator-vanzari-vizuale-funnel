import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Cache middleware pentru diferite tipuri de fișiere
const setCacheHeaders = (req, res, next) => {
  const ext = path.extname(req.path).toLowerCase();
  
  if (ext.match(/\.(js|css)$/)) {
    // Assets cu hash - cache 1 an + forțează Cloudflare
    res.set('Cache-Control', 'public, max-age=31536000, immutable, s-maxage=31536000');
    res.set('Expires', new Date(Date.now() + 31536000000).toUTCString());
    res.set('Edge-Control', 'cache,max-age=31536000');
  } else if (ext.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)) {
    // Imagini - cache 30 zile + forțează Cloudflare
    res.set('Cache-Control', 'public, max-age=2592000, s-maxage=2592000');
    res.set('Expires', new Date(Date.now() + 2592000000).toUTCString());
    res.set('Edge-Control', 'cache,max-age=2592000');
  } else if (ext.match(/\.(mp4|webm|avi|mov)$/)) {
    // Video - cache 7 zile
    res.set('Cache-Control', 'public, max-age=604800, s-maxage=604800');
    res.set('Expires', new Date(Date.now() + 604800000).toUTCString());
  } else if (ext.match(/\.(woff|woff2|ttf|eot)$/)) {
    // Fonts - cache 1 an
    res.set('Cache-Control', 'public, max-age=31536000, immutable, s-maxage=31536000');
    res.set('Expires', new Date(Date.now() + 31536000000).toUTCString());
    res.set('Edge-Control', 'cache,max-age=31536000');
  } else if (ext === '.html' || req.path === '/') {
    // HTML - cache 1 oră (revalidate des pentru conținut dinamic)
    res.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    res.set('Expires', new Date(Date.now() + 3600000).toUTCString());
  }
  
  next();
};

// Aplică cache headers
app.use(setCacheHeaders);

// Healthcheck endpoint - TREBUIE să fie înaintea rutei catch-all
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Google Search Console verification file
app.get('/google5a761ccf53c4a924.html', (req, res) => {
  res.type('text/html');
  res.send('google-site-verification: google5a761ccf53c4a924.html');
});

// Servește fișierele statice din directorul publish
app.use(express.static(path.join(__dirname, 'publish')));

// Pentru React Router - toate rutele să returneze index.html (ULTIMĂ rută)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'publish', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
