import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Courses() {
  // this fetch will run server side (as this is a server component)!
  const data = await fetch(
    'https://my-json-server.typicode.com/behrends/next-nav/courses'
  );

  const courses = await data.json();
  return (
    <div className="py-2">
      <h2 className="text-xl">Liste von Beispiel-Kursen</h2>
      <p className="mb-4">
        Die folgenden Kurse werden aus der Datei <code>db.json</code>{' '}
        (
        <a
          href="https://github.com/behrends/next-nav"
          target="_blank"
          className="text-blue-500"
        >
          &rarr; GitHub-Repository
        </a>
        ) via{' '}
        <a
          href="https://my-json-server.typicode.com"
          target="_blank"
          className="text-blue-500"
        >
          my-json-server
        </a>{' '}
        geladen.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
