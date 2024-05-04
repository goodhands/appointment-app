import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Chart } from "@/components/chart"
import { DatePickerWithRange } from "@/components/date-picker"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-full flex-row justify-between items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Dashboard
        </h1>
        <div className="flex flex-row items-center space-x-2">
          <DatePickerWithRange />
          <Button>Download</Button>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-4">
        <Chart />
        <Chart />
        <Chart />
        <Chart />
      </div>
      <div>

      </div>
    </section>
  )
}