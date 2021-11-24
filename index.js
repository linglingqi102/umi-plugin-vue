
module.exports = (api) => {
  api.addRuntimePluginKey(() => 'umi-plugin-vue');

  api.describe({
    key: 'umi-plugin-vue',
    config: {
      schema(joi) {
        return joi.object().keys({
          sfc: joi.object(),
          router: joi.object(),
          external: joi.object(),
        });
      },
    },
  });

  api.registerPlugins([
    require.resolve('./lib/umi-plugin-vue-sfc'),
    require.resolve('./lib/umi-plugin-vue-router'),
    require.resolve('./lib/umi-plugin-vue-external'),
  ]);
}
