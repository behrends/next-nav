Beispiel-Projekt mit [Next.js](https://nextjs.org/), das eine Navigationsleiste am oberen Bildschirmrand mit ein paar Screens implementiert.

&xrarr; Dieses Projekt kann als Vorlage für prototypische Webanwendungen eingesetzt werden.

Eingesetzte CSS- bzw. Komponenten-Bibliotheken:

- [tailwindcss](https://www.tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) &mdash; Sammlung von UI-Komponenten

Serverseitiges Data-Fetching ist in der [Komponente „Courses“](components/Courses.jsx), welche im Screen `Playground` dargestellt wird. Diese Serverkomponente simuliert das Laden von Daten von einem „Fake REST-Server“ mit Hilfe von [my-json-server.typicode.com](https://my-json-server.typicode.com). Die Daten dazu liegen in der Datei [db.json](db.json).

## Projekt direkt in Stackblitz öffnen

[![In  StackBlitz bearbeiten](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/behrends/next-nav/tree/main)

## Projekt auf dem eigenen Rechner verwenden

Dieses GitHub-Repository klonen oder herunterladen.

[Node.js](https://nodejs.org) muss installiert sein.

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
