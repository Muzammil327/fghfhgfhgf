import React from "react";
import type { Metadata } from "next";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import FileDownloader from "@/src/components/element/FileDownloader";
import PDFViewer from "@/src/components/element/PDFViewer";
import Form from "@/src/components/element/form/page";
import Image from "next/image";

const data = {
  title: "Download Punjab English Medium Biology Book",
  description:
    "Free download the cs201 book of vu introducing to programming books, all other books of vu on computer science and other fields are available. Download NOW.",
  canonical: "/class/class-9/punjab-board-biology/english/",
  index: true,
  follow: true,
  image: "/9th/book/biology/Download-Punjab-Board-Biology-Book.webp",
  url: "https://growlearnhub.com/class/class-9/punjab-board-biology/english/",
  keywords: ["cs201", "Introducing to Programming", "vu cs201"],
  fileName: "class-9-punjab-board-biology-book-english-medium.pdf",
  fileId:
    "/9th/book/biology/class-9-punjab-board-biology-book-english-medium.pdf",
};

export default function page() {
  return (
    <div>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid md:grid-cols-7 mb-28 gap-6">
          <div className="md:col-span-5">
            <div className="img">
              <Image
                src={data.image}
                alt={data.title}
                title={data.title}
                height={1280}
                className="h-auto w-full"
                width={720}
                priority
              />
            </div>
            <h2 className="text-xl font-semibold py-3">
              Download 9th class English Medium Biology Book Punjab Board
            </h2>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Book Name</td>
                    <td className="px-6 py-4">Biology English Medium</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Board Name</td>
                    <td className="px-6 py-4">Punjab Board</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Catgeory</td>
                    <td className="px-6 py-4">Class 9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <PDFViewer pdfUrl={data.fileId} />

            <FileDownloader
              fileId={data.fileId}
              fileName={data.fileName}
              buttonText="Download 9th class Biology Book Punjab Board"
            />
            <Form url={data.url} />
          </div>

          <div className="md:col-span-2">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: `${data.image}`,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: `${data.image}`,
      alt: data.title,
    },
  },
};
