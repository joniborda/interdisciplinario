import { Heading1 } from "@/components/Heading1";
import InputSearch from "@/components/InputSearch";
import { TopBar } from "@/components/TopBar";
import clsx from "clsx";
import data from "@/data/guessing.json";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.map((item) => {
      return {
        params: {
          id: item.title,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{
  subject: any;
}> = async (context) => {
  const id: string = (context.params?.id as string) || "";
  const subject = data.find((item) => item.title === id);
  return { props: { subject } };
};
export default function List({ subject }: { subject: any }) {
  return (
    <main className="h-screen">
      <TopBar>
        <Heading1
          style={{ textShadow: "1px 4px 4px #000000" }}
          className="font-[fortnite] text-2xl sm:text-4xl p-4"
        >
          {subject.title}
        </Heading1>
      </TopBar>
      <div className="shadow-2xl bg-slate-800 rounded-lg p-4 m-5">{subject.riddle}</div>
    </main>
  );
}
