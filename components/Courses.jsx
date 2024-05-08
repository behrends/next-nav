export default async function Courses() {
  // this fetch will run server side (as this is a server component)!
  const data = await fetch(
    'https://my-json-server.typicode.com/behrends/next-nav/courses'
  );

  const courses = await data.json();
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
        </div>
      ))}
    </>
  );
}
