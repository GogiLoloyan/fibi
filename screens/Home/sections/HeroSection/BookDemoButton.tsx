"use client";

import { useRouter } from "next/navigation";

import Button from "../../../../components/Button";

const BookDemoButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/book-a-demo")}>Book a Demo</Button>
  );
};

export default BookDemoButton;
