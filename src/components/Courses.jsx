async function getCourses() {
  // fetch data from github.com/behrends/nextjs-nav-mui/db.json
  // (fake REST server, see https://my-json-server.typicode.com)
  const res = await fetch(
    'https://my-json-server.typicode.com/behrends/nextjs-nav-mui/courses'
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Courses() {
  const courses = await getCourses();

  if (courses.length === 0)
    return <h2 className="text-3xl">Keine Kurse</h2>;

  return (
    <>
      {courses.map((course) => (
        <h2 key={course.id}>{course.name}</h2>
      ))}
    </>
  );
}
