import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {test} from '@jest/globals'
import os from 'os'
import * as fs from 'fs'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MACHINE'] = 'localhost'
  process.env['INPUT_USERNAME'] = 'user'
  process.env['INPUT_PASSWORD'] = 'pass'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'dist', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const netrc = path.resolve(os.homedir(), '.netrc')
  console.log(cp.execFileSync(np, [ip], options).toString())

  const contents = fs.readFileSync(netrc)
  console.log(contents.toString('utf-8'))
})
