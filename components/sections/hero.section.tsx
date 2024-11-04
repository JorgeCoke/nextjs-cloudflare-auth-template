"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-20">
        <div className="text-center space-y-12">
          <Badge variant="outline" className="text-sm py-2 bg-white">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Template is out now! </span>
          </Badge>
          <div className="max-w-screen-lg mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience the
              <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-mypink via-mypurple to-mypink bg-[200%_auto] text-transparent bg-clip-text">
                Next-Cloudflare
              </span>
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-mypink to-mypurple bg-clip-text">
                Next-Cloudflare
              </span> */}{" "}
              adventure
            </h1>
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Delightful, overpowered, beautifully handcrafted full-stack web framework template, 
            built on top of NextJS & Cloudflare, seasoned with modern tools`}
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="w-5/6 md:w-1/4 font-bold group/arrow bg-gradient-to-r from-mypink to-mypurple"
            >
              <Link href={ROUTES.AUTH.LOG_IN}>
                Log In
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/JorgeCoke/nextjs-cloudflare-auth-template"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
