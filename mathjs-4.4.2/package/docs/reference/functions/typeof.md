<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function typeof

Determine the type of a variable.

Function `typeof` recognizes the following types of objects:

Object                 | Returns       | Example
---------------------- | ------------- | ------------------------------------------
null                   | `'null'`      | `math.typeof(null)`
number                 | `'number'`    | `math.typeof(3.5)`
boolean                | `'boolean'`   | `math.typeof(true)`
string                 | `'string'`    | `math.typeof('hello world')`
Array                  | `'Array'`     | `math.typeof([1, 2, 3])`
Date                   | `'Date'`      | `math.typeof(new Date())`
Function               | `'Function'`  | `math.typeof(function () {})`
Object                 | `'Object'`    | `math.typeof({a: 2, b: 3})`
RegExp                 | `'RegExp'`    | `math.typeof(/a regexp/)`
undefined              | `'undefined'` | `math.typeof(undefined)`
math.type.BigNumber    | `'BigNumber'` | `math.typeof(math.bignumber('2.3e500'))`
math.type.Chain        | `'Chain'`     | `math.typeof(math.chain(2))`
math.type.Complex      | `'Complex'`   | `math.typeof(math.complex(2, 3))`
math.type.Fraction     | `'Fraction'`  | `math.typeof(math.fraction(1, 3))`
math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
math.type.Help         | `'Help'`      | `math.typeof(math.help('sqrt'))`
math.type.Index        | `'Index'`     | `math.typeof(math.index(1, 3))`
math.type.Matrix       | `'Matrix'`    | `math.typeof(math.matrix([[1,2], [3, 4]]))`
math.type.Range        | `'Range'`     | `math.typeof(math.range(0, 10))`
math.type.ResultSet    | `'ResultSet'` | `math.typeof(math.eval('a=2\nb=3'))`
math.type.Unit         | `'Unit'`      | `math.typeof(math.unit('45 deg'))`
math.expression.node.AccessorNode            | `'AccessorNode'`            | `math.typeof(math.parse('A[2]'))`
math.expression.node.ArrayNode               | `'ArrayNode'`               | `math.typeof(math.parse('[1,2,3]'))`
math.expression.node.AssignmentNode          | `'AssignmentNode'`          | `math.typeof(math.parse('x=2'))`
math.expression.node.BlockNode               | `'BlockNode'`               | `math.typeof(math.parse('a=2; b=3'))`
math.expression.node.ConditionalNode         | `'ConditionalNode'`         | `math.typeof(math.parse('x<0 ? -x : x'))`
math.expression.node.ConstantNode            | `'ConstantNode'`            | `math.typeof(math.parse('2.3'))`
math.expression.node.FunctionAssignmentNode  | `'FunctionAssignmentNode'`  | `math.typeof(math.parse('f(x)=x^2'))`
math.expression.node.FunctionNode            | `'FunctionNode'`            | `math.typeof(math.parse('sqrt(4)'))`
math.expression.node.IndexNode               | `'IndexNode'`               | `math.typeof(math.parse('A[2]').index)`
math.expression.node.ObjectNode              | `'ObjectNode'`              | `math.typeof(math.parse('{a:2}'))`
math.expression.node.ParenthesisNode         | `'ParenthesisNode'`         | `math.typeof(math.parse('(2+3)'))`
math.expression.node.RangeNode               | `'RangeNode'`               | `math.typeof(math.parse('1:10'))`
math.expression.node.SymbolNode              | `'SymbolNode'`              | `math.typeof(math.parse('x'))`


## Syntax

```js
math.typeof(x)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`x` | * | The variable for which to test the type.

### Returns

Type | Description
---- | -----------
string | Returns the name of the type. Primitive types are lower case, non-primitive types are upper-camel-case. For example 'number', 'string', 'Array', 'Date'.


## Examples

```js
math.typeof(3.5);                     // returns 'number'
math.typeof(math.complex('2-4i'));    // returns 'Complex'
math.typeof(math.unit('45 deg'));     // returns 'Unit'
math.typeof('hello world');           // returns 'string'
```

