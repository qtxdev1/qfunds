'use client';

import {
  Chart as ChartJS,
  ChartData,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip,
} from 'chart.js';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'chartjs-adapter-moment';
import { lineChartConfigs } from '@/lib/charts';
import { useThemeProvider } from '@/context/ThemeContext';

ChartJS.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

type LineChartProps = {
  chartData: ChartData<'line'>;
  width: number;
  height: number;
};

const LineChart: React.FC<LineChartProps> = ({ chartData, width, height }) => {
  const [chart, setChart] = useState<ChartJS<'line'> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { currentTheme } = useThemeProvider();

  const options = useMemo(
    () => lineChartConfigs(currentTheme === 'dark'),
    [currentTheme]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const newChart = new ChartJS(ctx, {
          type: 'line',
          data: chartData,
          options: options,
        });
        setChart(newChart);
        return () => newChart.destroy();
      }
    }
  }, [chartData, options]);

  useEffect(() => {
    if (chart && chart?.options) {
      chart.update('none');
    }
  }, [chart, options]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default LineChart;
