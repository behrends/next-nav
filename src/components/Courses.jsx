import { sql } from '@vercel/postgres';
import CourseCard from '@/components/CourseCard';

export default async function Courses() {
  // fetch data from Postgres (using Vercel's storage)
  const { rows } = await sql`SELECT * FROM courses`;

  if (rows.length === 0)
    return <h2 className="text-3xl">Keine Kurse</h2>;

  return (
    <>
      {rows.map((course) => (
        <CourseCard key={course.id} name={course.name} />
      ))}
    </>
  );
}
