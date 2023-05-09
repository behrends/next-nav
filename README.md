Beispiel-Projekt mit [Next.js](https://nextjs.org/), das eine Navigationsleiste am oberen Bildschirmrand mit ein paar Screens implementiert.

Eingesetzte CSS- bzw. Komponenten-Bibliotheken:

- [tailwindcss](https://www.tailwindcss.com)
- [daisyUI](https://www.daisyui.com) &mdash; Erweiterung von tailwind mit CSS-Komponenten (siehe z.B. die Tabelle im [Screen „Blockplan“](src/app/blockplan/page.js))
- [Mantine](https://mantine.dev) &mdash; Komponentensammlung für React (siehe z.B. die [CourseCard-Komponente](src/components/CourseCard.jsx))

Serverseitiges Data-Fetching z.B. in der [Komponente „Courses“](src/components/Courses.jsx)

&xrarr; Dieses Projekt kann als Vorlage für prototypische Webanwendungen eingesetzt werden.

In der Datei `db.json` liegen Beispiel-Daten, die durch [https://my-json-server.typicode.com](https://my-json-server.typicode.com) zu einem „Fake-REST-Server“ umgeleitet werden.

## Projekt direkt in Stackblitz öffnen

[![In  StackBlitz bearbeiten](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/behrends/next-nav/tree/main)

## Projekt auf dem eigenen Rechner verwenden

Dieses GitHub-Repository klonen oder herunterladen.

[NodeJS](https://nodejs.org) muss installiert sein.

Im Projektverzeichnis die Abhängigkeiten mit `npm` installieren:

```bash
npm install
```

Danach den Development-Server für das Next.js-Projekt starten:

```bash
npm run dev
```

Die Webanwendung mit der Adresse [http://localhost:3000](http://localhost:3000) im Browser öffnen.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
