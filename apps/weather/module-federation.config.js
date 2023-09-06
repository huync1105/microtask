module.exports = {
  name: 'weather',
  exposes: {
    './Module': 'apps/weather/src/app/remote-entry/entry.module.ts',
  },
};
