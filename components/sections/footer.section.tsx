import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-black/[.1] py-12 bg-white">
      <div className="container space-y-3 text-center">
        <p className="cal text-xl font-semibold">Next-Cloudflare</p>

        <p className="text-sm text-slate-700 ">
          Copyright © 2025 JorgeCoke - All rights reserved. See our{" "}
          <Link
            href="#"
            aria-label="Terms and Conditions"
            className="underline underline-offset-4 hover:text-black"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            aria-label="Privacy Policy"
            className="underline underline-offset-4 hover:text-black"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex items-center justify-between">
          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <Link
              aria-label="View on GitHub"
              href="https://github.com/JorgeCoke/next-cloudflare.git"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
          </Button>
          <p className="text-xs text-black opacity-50">
            v{process.env.npm_package_version}
          </p>
        </div>
      </div>
    </footer>
  );
};
