import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Content Site Challenge',
    template: '%s | Content Site Challenge',
  },
  description: 'A mini content site challenge built with Next.js 15.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* TODO: Add global providers or persistent UI elements here */}
      <body>{children}</body>
    </html>
  );
} 