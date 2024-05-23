import { MetadataRoute } from "next";
import { convertToLowercaseWithHyphen } from "../views/function/convertToLowercaseWithHyphen";
const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // response 1
    const response1 = await fetch(`${URL}/api/get/allmcqs`, {
      cache: "no-store", // This will bypass cache
    });
    const data1 = await response1.json();

    const mcqsroutes: MetadataRoute.Sitemap = data1.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/mcqs/${convertToLowercaseWithHyphen(product.title)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
      changeFrequency: "daily",
    }));
    // response 2

    const response2 = await fetch(`${URL}/api/get/book`, {
      cache: "no-store", // This will bypass cache
    });
    const data2 = await response2.json();

    const bookroutes: MetadataRoute.Sitemap = data2.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/quiz/${convertToLowercaseWithHyphen(product.title)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: "daily",
    }));
    // response 3

    const response3 = await fetch(`${URL}/api/get/heading1`, {
      cache: "no-store", // This will bypass cache
    });
    const data3 = await response3.json();

    const heading1routes: MetadataRoute.Sitemap = data3.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/quiz/${convertToLowercaseWithHyphen(
        product.book.title
      )}/${convertToLowercaseWithHyphen(product.title)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
      changeFrequency: "daily",
    }));
    // response 4

    const response4 = await fetch(`${URL}/api/get/heading2`, {
      cache: "no-store", // This will bypass cache
    });
    const data4 = await response4.json();

    const heading2routes: MetadataRoute.Sitemap = data4.map((product: any) => ({
      url: `${
        process.env.NEXT_PUBLIC_FRONTEND_URL
      }/quiz/${convertToLowercaseWithHyphen(
        product.book.title
      )}/${convertToLowercaseWithHyphen(
        product.heading1.title
      )}/${convertToLowercaseWithHyphen(product.title)}/`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "daily",
    }));

    return [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-us/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/quiz/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/9th/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/10th/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/11th/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/12th/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/study-material/vu/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/cs101-handout/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/eng101-handout/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/eth-202-handout/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/isl-202-handout/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/vu/books/computer-science/mth100-handout/`,
        lastModified: new Date().toISOString(),
        priority: 1,
        changeFrequency: "daily",
      },
      ...bookroutes,
      ...heading1routes,
      ...heading2routes,
      ...mcqsroutes,
    ];
  } catch (error) {
    console.error("Error", error);
    // Returning an empty array as a fallback
    return [];
  }
}
