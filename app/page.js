import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <section>
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
    </section>
  );
}
