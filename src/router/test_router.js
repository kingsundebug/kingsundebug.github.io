export default [{
  path: '/test',
  name: 'test',
  component: () => import(/* webpackChunkName: "test" */'@/views/test/index.vue')
}]
