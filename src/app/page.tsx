"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BarChart3 } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const chartData = [
  { month: "Jan", visitors: 1200, signups: 230 },
  { month: "Feb", visitors: 1500, signups: 310 },
  { month: "Mar", visitors: 1800, signups: 420 },
  { month: "Apr", visitors: 2100, signups: 460 },
  { month: "May", visitors: 2500, signups: 520 },
  { month: "Jun", visitors: 2900, signups: 610 }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/30">
      <section className="container grid gap-12 py-16">
        <div className="grid items-center gap-6 text-center md:grid-cols-2 md:text-left">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              Next.js + Tailwind starter
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Kickstart your analytics experience with a modern Next.js stack.
            </h1>
            <p className="text-lg text-muted-foreground">
              This template ships with TypeScript, Tailwind CSS, shadcn/ui, and Recharts already configured so you can focus on building great product experiences.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group">
                Start building
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View documentation
              </Button>
            </div>
          </div>
          <Card className="order-first overflow-hidden border-none bg-card shadow-lg ring-1 ring-border md:order-last">
            <CardHeader className="pb-2">
              <CardTitle>Performance overview</CardTitle>
              <CardDescription>Daily visitors and sign ups</CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs text-muted-foreground" axisLine={false} tickLine={false} />
                  <YAxis className="text-xs text-muted-foreground" axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.75rem"
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Area type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorVisitors)" />
                  <Area type="monotone" dataKey="signups" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorSignups)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="container-grid">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>What’s inside</CardTitle>
              <CardDescription>Everything you need to launch quickly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <FeatureItem title="Next.js 14 App Router" description="App directory, Route Handlers, and modern tooling to build dynamic experiences." />
              <FeatureItem title="Tailwind CSS" description="Utility-first styling with sensible defaults, dark mode support, and custom themes." />
              <FeatureItem title="shadcn/ui" description="Composable components built on Radix UI and Tailwind CSS to ship production interfaces faster." />
              <FeatureItem title="Recharts" description="Powerful charting components to visualize metrics and KPIs in minutes." />
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Developer experience</CardTitle>
              <CardDescription>Preconfigured tooling and conventions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <FeatureItem title="TypeScript ready" description="Strict configuration and path aliases help maintain a scalable codebase." />
              <FeatureItem title="ESLint configured" description="Use `npm run lint` to catch issues early with Next.js linting rules." />
              <FeatureItem title="Tailwind best practices" description="Extended theme tokens, container helpers, and animation utilities included." />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

type FeatureItemProps = {
  title: string;
  description: string;
};

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className={cn("flex gap-3 rounded-lg border bg-card p-4", "transition hover:border-primary/40 hover:shadow-sm")}> 
      <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-primary" />
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
