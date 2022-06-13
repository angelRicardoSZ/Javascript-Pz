# Typescript

## Basics

Installation

```javascript
npm install -g typescript
```

Compilation

```
tsc file.ts
```

Automated compilation

```
tsc --watch file.ts
```

Settings

Indicates that the directory is the root of a TypeScript project, also specifies the compiler options.

```javascript
tsc init
```

Example

```json
{
	"extends": "./config/base"
	"compilerOptions":{
		"target": "es6",
		"module": "commonjs"
		"strict": true,
		"removeComments": true
	},
	"include":[
		"src/**/*.ts"
	],
	"exclude": [
		"node_modules",
		"**/*.test.ts"
	]
}
```

Typing

- Explicit

  ```
  variable : type
  ```

- Implicit

  ```
  variable = value
  ```

  

