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
    title: "Rushing Without Requirements",
    challenge:
      "Early on, I'd dive into coding before fully understanding requirements. I'd hit edge cases mid-development, need clarification, and sometimes have to rework the core flow—delaying deadlines.",
    lesson:
      "Never commit to a deadline without clarifying requirements first. Now I document expected cases and solutions upfront before touching code—it saves time and sets clear expectations.",
    icon: "alert-circle",
    color: "#f87171",
  },
  {
    title: "Silent Progress",
    challenge:
      "I used to work quietly on multi-day or multi-week tasks, thinking 'I'll report when it's done.' My manager had no visibility, making it hard to track progress or offer help.",
    lesson:
      "Daily updates became my habit: what I finished, what's next, and any blockers. It builds trust, surfaces issues early, and keeps the team aligned—even when working independently.",
    icon: "message-circle",
    color: "#fbbf24",
  },
];

export function HardEarnedLessonsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container flex flex-col gap-12">
        <div className="text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
            Growth
          </span>
          <h2 className="text-foreground text-3xl font-bold mb-4">
            Lessons Learned
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mistakes I made early on that shaped how I work today.
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
