import * as React from 'react';

import { cn } from '@/lib/utils';

import Layout from '@/components/layout/Layout';

type DashboardProps = {} & React.ComponentPropsWithoutRef<'div'>;

export default function Dashboard({ className, ...rest }: DashboardProps) {
  return (
    <Layout className={cn(['', className])} {...rest}>
      DB
    </Layout>
  );
}
