import * as core from '@actions/core'
import * as os from 'os'
import {promises as fs} from 'fs'
import * as path from 'path'

async function run(): Promise<void> {
  try {
    const machine = encodeURI(core.getInput('machine')) || 'github.com'
    const username =
      encodeURI(core.getInput('username')) ||
      process.env['GITHUB_REPOSITORY_OWNER'] ||
      "''"
    const password =
      encodeURI(core.getInput('password')) ||
      process.env['GITHUB_TOKEN'] ||
      "''"
    const line = `machine ${machine} login ${username} password ${password}\n`
    const netrc = path.resolve(os.homedir(), '.netrc')
    await fs.writeFile(netrc, line, {flag: 'a', mode: 0o600})
    return
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
