import Courses from '@/components/Courses';

export default function CourseScreen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Kurse im SZI</h1>
      <Courses />
    </main>
  );
}
