import { Button } from "@/components/ui/button"

import Link from "next/link"


export function Signup() {
  return <Button>
    <Link href="@/app/(auth)/sign-up/page"></Link>
    </Button>
}
