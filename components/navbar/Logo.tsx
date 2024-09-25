import React from "react";
import DashiconsAdminMultisite from "./DashiconsAdminMultisite";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" variant='outline' className="p-1" asChild>
      <Link href="/">
        <DashiconsAdminMultisite />
      </Link>
    </Button>
  );
}

export default Logo;
