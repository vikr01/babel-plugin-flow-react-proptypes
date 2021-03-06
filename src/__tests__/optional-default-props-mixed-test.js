const babel = require('babel-core');
const content = `
var React = require('react');
var PropTypes = require('prop-types');

type FooProps = {
  a: number,
  b: number,
  c: string,
}

class Foo extends React.Component<FooProps> {
  render() {
    return (
      <div>
        {this.props.a}
        {this.props.b}
        {this.props.c}
      </div>
    );
  }
}

Foo.defaultProps = {
  a: 7
};

export default Foo;
`;

it('optional-default-props-mixed', () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
