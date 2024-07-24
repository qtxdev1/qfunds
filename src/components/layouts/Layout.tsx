import * as React from 'react';

import { cn } from '@/lib/utils';

import Header from '@/components/layouts/Header';

type LayoutProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Layout({ children, className, ...rest }: LayoutProps) {
  return (
    <div
      className={cn([
        'flex h-screen overflow-hidden bg-slate-100 dark:bg-slate-900',
        className,
      ])}
      {...rest}
    >
      {/* <Sidebar></Sidebar> */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        <Header></Header>
        <main>{children}</main>
      </div>
    </div>
  );
}
