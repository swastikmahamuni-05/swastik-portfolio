import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Swastik Mahamuni",
  description:
    "Get in touch with Swastik Mahamuni for software engineering opportunities, AI research collaborations, or technical inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
