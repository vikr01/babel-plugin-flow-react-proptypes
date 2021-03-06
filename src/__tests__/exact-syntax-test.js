const babel = require('babel-core');
const content = `
type FooProps = {
  bar: {|
    a: string,
    b: number,
  |}
};

class Foo extends React.Component {
  props: FooProps;

  render() { return <div /> }
};
`;

it('exact-syntax', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
