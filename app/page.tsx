"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { DateRangePicker } from "@nextui-org/date-picker";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [dateValue, setDateValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center mb-8">
        <span className={title()}>Experience&nbsp;</span>
        <span className={`${title()} bg-gradient-to-b from-orange-400 via-orange-500 to-amber-600 bg-clip-text text-transparent`}>
          luxury&nbsp;
        </span>
        <br />
        <span className={title()}>
          in the heart of tranquility.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Your perfect getaway awaits at{' '}
          <span className="bg-gradient-to-b from-orange-400 via-orange-500 to-amber-600 bg-clip-text text-transparent font-semibold">
            KRAAL Hotel
          </span>.
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <DateRangePicker
          label="Select your stay dates"
          value={dateValue}
          onChange={setDateValue}
          variant="bordered"
          radius="sm"
          color="warning"
          size="lg"
          classNames={{
            label: "text-white",
            base: "h-14",
          }}
        />

        <Link
          className={buttonStyles({
            color: "warning",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href={siteConfig.links.docs}
        >
          Book Now
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
