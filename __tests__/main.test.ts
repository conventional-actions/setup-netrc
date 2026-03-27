import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {fileURLToPath} from 'url'
import {test} from '@jest/globals'
import os from 'os'
import * as fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MACHINE'] = 'localhost'
  process.env['INPUT_USERNAME'] = 'user'
  process.env['INPUT_PASSWORD'] = 'pass'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'dist', 'index.cjs')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const netrc = path.resolve(os.homedir(), '.netrc')
  cp.execFileSync(np, [ip], options)

  const contents = fs.readFileSync(netrc)
  console.log(contents.toString('utf-8'))
})
