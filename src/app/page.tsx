'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import Layout from '@/components/layouts/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4'>QApp Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='http://localhost:3000'>
              Next Starter
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </Layout>
  );
}
