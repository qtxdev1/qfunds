import { ChartData, ChartOptions } from 'chart.js';
import resolveConfig from 'tailwindcss/resolveConfig';

import twConfig from '../../tailwind.config';

import { HistoryData } from '@/types';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig(twConfig);
};

export const hexToRGB = (h) => {
  let r = '0';
  let g = '0';
  let b = '0';
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);

export const chartColors = {
  textColor: {
    light: tailwindConfig().theme.colors.slate[400],
    dark: tailwindConfig().theme.colors.slate[500],
  },
  gridColor: {
    light: tailwindConfig().theme.colors.slate[100],
    dark: tailwindConfig().theme.colors.slate[700],
  },
  backdropColor: {
    light: tailwindConfig().theme.colors.white,
    dark: tailwindConfig().theme.colors.slate[800],
  },
  tooltipTitleColor: {
    light: tailwindConfig().theme.colors.slate[800],
    dark: tailwindConfig().theme.colors.slate[100],
  },
  tooltipBodyColor: {
    light: tailwindConfig().theme.colors.slate[800],
    dark: tailwindConfig().theme.colors.slate[100],
  },
  tooltipBgColor: {
    light: tailwindConfig().theme.colors.white,
    dark: tailwindConfig().theme.colors.slate[700],
  },
  tooltipBorderColor: {
    light: tailwindConfig().theme.colors.slate[200],
    dark: tailwindConfig().theme.colors.slate[600],
  },
  chartAreaBg: {
    light: tailwindConfig().theme.colors.slate[50],
    dark: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[900])}, 0.24)`,
  },
};

export const cardSettings = (historyData: HistoryData) =>
  ({
    labels: historyData.timeSeries,
    datasets: [
      {
        data: historyData.points,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  } as ChartData<'line'>);

export const lineChartConfigs = (darkMode: boolean) => {
  const { tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

  return {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20,
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        type: 'time',
        time: {
          parser: 'MM-DD-YYYY',
          unit: 'month',
        },
        display: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: () => '', // Disable tooltip title
          label: (context) => formatValue(context.parsed.y),
        },
        bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
        backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
        borderColor: darkMode
          ? tooltipBorderColor.dark
          : tooltipBorderColor.light,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: 'nearest',
    },
    resizeDelay: 200,
  } as ChartOptions<'line'>;
};
