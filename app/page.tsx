import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Registration Closed — Codeathon 2.0",
  description: "Codeathon 2.0 registration is now closed.",
}

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="w-full max-w-xl text-center space-y-5 rounded-lg border bg-card/50 p-8">
        <h1 className="text-balance text-3xl md:text-4xl font-semibold text-primary">
          Codeathon 2.0 — Registration Closed
        </h1>
        <p className="text-pretty text-base md:text-lg text-muted-foreground">
          Registration for Codeathon 2.0 is now closed. Thank you for your interest!
        </p>
        <div className="mx-auto inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1 text-secondary-foreground font-mono text-xs">
          <span className="inline-block h-2 w-2 rounded-full bg-destructive" aria-hidden="true"></span>
          <span className="uppercase tracking-wider">status: closed</span>
        </div>
      </section>
    </main>
  )
}
