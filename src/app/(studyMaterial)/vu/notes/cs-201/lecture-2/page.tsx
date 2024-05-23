import React from "react";
import Container from "@/src/components/element/container";
import Sidebar from "@/src/components/element/sidebar";
import SubHeader from "@/src/components/layout/header/subheader/page";
import Link from "next/link";
import styles from "@/src/styles/content.module.css";

const data = {
  title: "CS-201 Introducing to Programming Chapter 2",
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
            <p className={styles.para}>
              <strong>
                All the content copy from Virtual University Handouts.{" "}
              </strong>
            </p>
            <p className={styles.para}>
              <span className={styles.span}>Software</span> is categorized into
              two main categories.
            </p>
            <h2 className="my-3 text-xl font-semibold">1- System Software: </h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span className="font-semibold">Operating system</span> children
                to program. What fun is there in making plans,
              </li>
              <li className={styles.li}>
                <span className="font-semibold">Device drivers</span> children
                to program. What fun is there in making plans,
              </li>
              <li className={styles.li}>
                <span className="font-semibold">Utility Software </span>{" "}
                children to program. What fun is there in making plans,
              </li>
              <li className={styles.li}>
                <span className="font-semibold">Compilers </span> read the whole
                program and translates it into machine language completely.
                Compiler will stop translating if it finds an error and no
                executable code.
              </li>
              <li className={styles.li}>
                <span className="font-semibold">Interpreters </span> translates
                the program line by line meaning it reads one line of program
                and translates it, then it reads second line, translate it and
                so on. It cannot optimize the program.
              </li>
            </ul>
            <h2 className="my-3 text-xl font-semibold">
              2- Application Software:{" "}
            </h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span className="font-semibold">Operating system</span> children
                to program. What fun is there in making plans,
              </li>
              <li className={styles.li}>
                <span className="font-semibold">Device drivers</span> children
                to program. What fun is there in making plans,
              </li>
            </ul>

            <p className={styles.para}>
              <span className={styles.span}>Editors:</span>
              Used for writing the code of a program. like Notepad, Vscode,
              Pycharam and c++ Ideals.
            </p>
            <p className={styles.para}>
              <span className={styles.span}>Translator:</span>
              Translates the code of our program into machine language
              (second-generation language). Computers and machine language both
              are 0s and 1s.There are two kinds of translators which are known
              as Interpreter and Compilers, which is already discussed.
            </p>

            <p className={styles.para}>
              <span className={styles.span}>Debugger</span> is used to debug the
              program and correct the logical errors.
            </p>
            <p className={styles.para}>
              <span className={styles.span}>Linker</span> is a computer system
              program that takes one or more files generated by a compiler or an
              assembler and combines them into a single executable file.
            </p>

            <div className="flex items-center justify-between mt-6">
              <Link href="/vu/notes/cs-201/lecture-1/" className={styles.btn}>
                Chapter 1
              </Link>
              <Link href="/vu/notes/cs-201/lecture-2/" className={styles.btn}>
                Chapter 2
              </Link>
              <Link href="/vu/notes/cs-201/lecture-3/" className={styles.btn}>
                Chapter 3
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <Sidebar title={data.title} url={data.url} />
          </div>
        </div>
      </Container>
    </div>
  );
}