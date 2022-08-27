# setup-netrc

A GitHub Action for setting up a .netrc file for accessing private Go repositories.

## Usage

To use the GitHub Action, add the following to your job:

```yaml
- uses: conventional-actions/setup-netrc@v1
```

### Inputs

| Name       | Default                    | Description             |
|------------|----------------------------|-------------------------|
| `machine`  | `github.com`               | the remote machine name |
| `username` | `$GITHUB_REPOSITORY_OWNER` | the remote username     |
| `password` | `$GITHUB_TOKEN`            | the remote password     |

### Outputs

No outputs

### Example

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: conventional-actions/setup-netrc@v1
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).

