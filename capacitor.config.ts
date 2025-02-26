import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourapp.name',
  appName: 'YourAppName',
  webDir: 'build', // Change to 'dist' if using another folder
  bundledWebRuntime: false,
};

export default config;
