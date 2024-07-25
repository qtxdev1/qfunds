import { produce } from 'immer';
import { create } from 'zustand';
import { chartDataSample } from '@/lib/dummyChartData';
import { Signal } from '@/types';

interface SignalState {
  signals: Signal[];
  addAllSignals: (data: Signal[]) => void;
  addSignal: (data: Signal) => void;
  removeSignal: (id: string) => void;
}

export const useSignalStore = create<SignalState>((set) => ({
  signals: [
    {
      id: '0',
      name: 'Alex Shatov',
      description: 'Capability',
      tvl: 2890.66,
      historyData: { ...chartDataSample },
    },
    {
      id: '1',
      name: 'Philip Harbach',
      description: 'Luminafee X',
      tvl: 2767.04,
      historyData: { ...chartDataSample },
    },
    {
      id: '2',
      name: 'Mirko Fisuk',
      description: 'Onekilometer',
      tvl: 2996.0,
      historyData: { ...chartDataSample },
    },
    {
      id: '3',
      name: 'Olga Semklo',
      description: 'Diversified multiadvisor strategy',
      tvl: 1220.66,
      historyData: { ...chartDataSample },
    },
    {
      id: '4',
      name: 'Burak Long',
      description: 'EURUSD GBPUSD CIPITIH',
      tvl: 1890.66,
      historyData: { ...chartDataSample },
    },
    {
      id: '6',
      name: 'Olga Semklo',
      description: 'TDS Primecodex Putra Sulung C485',
      tvl: 1220.66,
      historyData: { ...chartDataSample },
    },
    {
      id: '7',
      name: 'Burak Long',
      description: 'AUDCAD FP',
      tvl: 1890.66,
      historyData: { ...chartDataSample },
    },
  ],
  addAllSignals: (data: Signal[]) =>
    set(
      produce((state: SignalState) => {
        state.signals = data;
      })
    ),
  addSignal: (data: Signal) =>
    set(
      produce((state: SignalState) => {
        state.signals.push(data);
      })
    ),
  removeSignal: (id: string) =>
    set(
      produce((state: SignalState) => {
        state.signals = state.signals.filter((signal) => signal.id !== id);
      })
    ),
}));
