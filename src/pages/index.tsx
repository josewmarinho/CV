import Content from '@/components/content';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="m-auto flex h-screen flex-col items-center gap-4 bg-white-950">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
