# ember-registry-syntax-codemod

**NOTE**: _The new registry API has not been implemented yet. This codemod was done in preperation for it landing._

A collection of transforms to move from the deprecated registry micro-syntax to the new registry API (see [RFC](https://github.com/emberjs/rfcs/blob/master/text/0585-improved-ember-registry-apis.md)).

## Usage

WARNING: This codemod edits your files in place. It does not make a copy. Make sure your code is checked into a source control repository like Git and that you have no outstanding changes to commit before running this tool.

To run a specific codemod from this project, you would run the following:

```
npx ember-registry-syntax-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemod
ember-registry-syntax-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

The codemod accepts the following options:

| Option  | Value  | Default  | Details                                                                                                 |
| ------- | ------ | -------- | ------------------------------------------------------------------------------------------------------- |
| --quote | String | 'single' | Whether to use double or single quotes by default for new statements that are added during the codemod. |

## Transforms

- lookup
- register
- unregister
- inject
- classic-service
- octane-service

## Contributing

### Installation

- clone the repo
- change into the repo directory
- `yarn`

### Running tests

- `yarn test`

### Update Documentation

- `yarn update-docs`
