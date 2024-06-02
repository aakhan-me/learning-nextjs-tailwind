export default function Footer() {
  return (
    <div className="flex flex-col mx-10">
      <p className="mb-8 text-sm text-muted-foreground text-center">
        Built by <a href="https://awaisworks.com">Awais</a> • With TypeScript,
        Next.js, Tailwind • Code on{" "}
        <a href="https://github.com/aakhan-me/learning-nextjs-tailwind">
          GitHub
        </a>{" "}
        • Deployed on Vercel.
      </p>
    </div>
  );
}
