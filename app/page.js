import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Next.js App</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Dies ist eine Beispiel-App mit Next.js, Tailwind und
            shadcn/ui
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
