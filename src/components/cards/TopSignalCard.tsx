'use client';

import Image from 'next/image';
import React from 'react';
import { cardSettings } from '@/lib/charts';
import { usdFormat } from '@/lib/helper';
import LineChart from '@/components/charts/LineChart';
import { Signal } from '@/types';

type TopSignalCardProps = {
  data: Signal;
};

function TopSignalCard({
  data: { name, description, tvl, diff, historyData },
}: TopSignalCardProps) {
  const chartData = cardSettings(historyData);

  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700'>
      <div className='px-5 pt-5'>
        <header className='flex justify-between items-start mb-2'>
          <Image
            src='images/icon-01.svg'
            width='32'
            height='32'
            alt='Icon 01'
          />
        </header>
        <h2 className='text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2'>
          {name}
        </h2>
        <div className='text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1'>
          {description}
        </div>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2'>
            {usdFormat(tvl)}
          </div>
          <div className='text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full'>
            {`+${diff}%`}
          </div>
        </div>
      </div>
      <div className='grow max-sm:max-h-[128px] xl:max-h-[128px]'>
        <LineChart chartData={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default TopSignalCard;
