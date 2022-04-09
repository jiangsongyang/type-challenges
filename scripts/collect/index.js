//操作文件
const fs = require('fs')
const path = require('path')

const main = () => {
  const dirList = fs.readdirSync(path.resolve() + '/src', {
    encoding: 'utf-8',
  })

  const data = new Uint8Array(
    Buffer.from(
      dirList
        .map((i) => (i.endsWith('.ts') ? undefined : i))
        .filter(Boolean)
        .map((i) => `export * from "./${i}/src"`)
        .join('\n')
    )
  )
  fs.writeFile(path.resolve() + '/src/index.ts', data, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

main()
