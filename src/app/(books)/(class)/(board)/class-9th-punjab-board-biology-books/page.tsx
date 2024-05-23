import React from "react";
import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import { Class9_Book_punjabDatas } from "../../../data";
import Form from "@/src/components/element/form/page";

const data = {
  title: "Class 9th Punjab Board Biology Books",
  description:
    "Main purpose of Codebloglab is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.",
  canonical: "/study-material/",
  index: true,
  follow: true,
  image: "/opengraph-image.jpg",
  url: "https://growlearnhub.com/study-material/",
  keywords: ["growlearnhub quiz", "quiz"],
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid lg:grid-cols-11 gap-2 mb-12">
          <div className="col-span-8">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-2">
              {Class9_Book_punjabDatas.map((data: any) => {
                return (
                  <Card2 key={data.id} title={data.title} link={data.link} />
                );
              })}
            </div>
            <Form url={data.url} />
          </div>
          <div className="col-span-3">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}
