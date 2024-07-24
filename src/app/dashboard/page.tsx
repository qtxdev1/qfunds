'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

import ActivityCard from '@/components/cards/ActivityCard';
import SignalCard from '@/components/cards/SignalCard';
import TopSignalCard from '@/components/cards/TopSignalCard';
import Layout from '@/components/layouts/Layout';

import { useSignalStore } from '@/store/useSignal';

type DashboardProps = {} & React.ComponentPropsWithoutRef<'div'>;

export default function Dashboard({ className }: DashboardProps) {
  const { signals } = useSignalStore();

  const topSignals = React.useMemo(() => {
    const sortedSignals = [...signals].sort((a, b) => b.tvl - a.tvl);
    return sortedSignals.slice(0, 3);
  }, [signals]);

  return (
    <Layout className={cn(['', className])}>
      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto max-h-9xl'>
        <div className='grid grid-cols-12 gap-6'>
          {topSignals.map((signal) => (
            <TopSignalCard key={signal.id} data={signal} />
          ))}
          <SignalCard signals={signals} />
          <ActivityCard />
        </div>
      </div>
    </Layout>
  );
}
