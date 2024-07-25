import Image from 'next/image';
import * as React from 'react';
import { usdFormat } from '@/lib/helper';
import defaultAvatar from '../../../public/images/user-avatar-32.png';
import { Signal } from '@/types';

type SignalCardProps = {
  signals: Signal[];
} & React.ComponentPropsWithoutRef<'div'>;

export default function SignalCard({ signals }: SignalCardProps) {
  return (
    <div className='col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
          Signals
        </h2>
      </header>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-100 dark:divide-slate-700'>
              {signals.map((signal) => {
                return (
                  <tr key={signal.id}>
                    <td className='p-2 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='w-10 h-10 shrink-0 mr-2 sm:mr-3'>
                          <Image
                            className='rounded-full'
                            src={signal?.image || defaultAvatar}
                            width={40}
                            height={40}
                            alt={signal.name}
                          />
                        </div>
                        <div className='font-medium text-slate-800 dark:text-slate-100'>
                          {signal.name}
                        </div>
                      </div>
                    </td>
                    <td className='p-2 whitespace-nowrap'>
                      <div className='text-left text-slate-800 dark:text-slate-400'>
                        {signal.description}
                      </div>
                    </td>
                    <td className='p-2 whitespace-nowrap'>
                      <div className='text-left font-medium text-green-500'>
                        {usdFormat(signal.tvl)}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
