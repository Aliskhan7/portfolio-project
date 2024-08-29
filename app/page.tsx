import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className='relative flex items-center justify-between flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100'>
      <div className='max-w-7xl w-full'>
        <Hero/>
      </div>
    </main>
  );
}
