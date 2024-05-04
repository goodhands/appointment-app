import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "./icons"

export function Chart() {
  return (
    <Card>
      <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium text-sm tracking-tight">
			Total Revenue
		</CardTitle>
		<Icons.twitter />
      </CardHeader>
      <CardContent>
		<div className="text-2xl font-bold">$24,053.04</div>
		<p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  )
}
