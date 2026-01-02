"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { ComponentProps } from "react";

interface Lesson {
  title: string;
  challenge: string;
  lesson: string;
  icon: ComponentProps<typeof DynamicIcon>["name"];
  color: string;
}

const mockLessons: Lesson[] = [
  {
    title: 'The "Perfect Code" Trap',
    challenge:
      "Early in my career, I would delay shipping features because the code wasn't 'elegant' enough.",
    lesson:
      '"Done is better than perfect." I learned to iterate. Ship the MVP, gather feedback, and refactor later. Value delivered to users > Beautiful code in a repo.',
    icon: "code",
    color: "#f87171",
  },
  {
    title: "The Production Crash",
    challenge:
      "A database migration I wrote locked a production table for 2 hours during peak traffic. Panic ensued.",
    lesson:
      "Always test with production-scale data. Observability and robust rollback strategies are not optional extras—they are the foundation of reliability.",
    icon: "database",
    color: "#fbbf24",
  },
];

export function HardEarnedLessonsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold mb-4">
            Hard-Earned Lessons
          </h2>
          <p className="text-muted-foreground">
            The path wasn&apos;t always smooth. Here are the obstacles that
            became my greatest teachers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {mockLessons.map((lesson) => (
            <LessonCard key={lesson.title} lesson={lesson} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="bg-surface p-8 rounded-2xl border border-stroke shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-3 rounded-lg aspect-square shrink-0"
          style={{ color: lesson.color, backgroundColor: `${lesson.color}20` }}
        >
          <DynamicIcon name={lesson.icon} size={20} />
        </div>
        <h3 className="text-lg font-bold text-foreground">{lesson.title}</h3>
      </div>
      <p className="text-sm mb-4">
        <strong className="text-muted-foreground">Challenge:</strong>{" "}
        <span className="text-muted-foreground">{lesson.challenge}</span>
      </p>
      <div className="pl-4 border-l-2 border-primary">
        <p className="text-foreground font-medium text-sm">
          <strong>Lesson:</strong> {lesson.lesson}
        </p>
      </div>
    </div>
  );
}
