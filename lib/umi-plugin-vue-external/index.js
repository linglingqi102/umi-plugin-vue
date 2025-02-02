module.exports = (api, {
  url =
  process.env.NODE_ENV === 'development'
    ? 'https://unpkg.com/vue@2.5.20/dist/vue.js'
    : 'https://unpkg.com/vue@2.5.20/dist/vue.min.js'
} = {}) => {
  api.modifyHTML($ => {
    $('head').append(
      `<script src="${url}"></script>`,
    );
    return $;
  })

  api.modifyDefaultConfig(memo => {
    return Object.assign(memo, {
      externals: {
        "vue": "window.Vue",
      },
    })
  })
}

