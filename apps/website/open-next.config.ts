import type { OpenNextConfig } from 'open-next/types/open-next';

const config = {
  default: {},
  // Handle build with NX
  buildCommand: 'exit 0',
  // Note that this is not what the docs have https://opennext.js.org/aws/config/nx <-- doesn't work
  buildOutputPath: '../../dist/website',
  appPath: '../../dist/website',
  packageJsonPath: '../../',
} satisfies OpenNextConfig;

export default config;
