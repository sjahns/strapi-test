export default ({$strapi}) => {
  $strapi.$http.onResponse((req) => {
    console.log('onResponse', req.url);
  });
};
