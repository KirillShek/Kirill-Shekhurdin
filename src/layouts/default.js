export default function DefaultLayout({ title = 'Kirill Shekhurdin', content = '' }) {
  return `
    <!doctype html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}
