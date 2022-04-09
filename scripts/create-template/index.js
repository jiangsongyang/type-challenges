const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const chalk = require('chalk')

const TYPE_MAP = {
  CATALOGUE: 'catalogue',
}

const questions = [
  {
    name: 'type',
    type: 'rawlist',
    message: 'Which type you want to create',
    choices: ['warm-up', 'simple', 'mid', 'hard', 'hell'],
  },
  {
    name: 'name',
    type: 'input',
    message: 'name is ?',
  },
  {
    name: 'number',
    type: 'input',
    message: 'number is ?',
  },
]

const copyExt = ['ts']
/**
 * 复制一个文件夹下的文件到另一个文件夹
 * @param src 源文件夹
 * @param dst 目标文件夹
 */
const copyDir = function (src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function (path) {
      const _src = src + '/' + path
      const _dst = dst + '/' + path
      let readable
      let writable
      fs.stat(_src, function (err, st) {
        if (err) {
          throw err
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 允许的后缀才可以被复制
          if (contains(copyExt, _src)) {
            // 创建读取流
            readable = fs.createReadStream(_src)
            // 创建写入流
            writable = fs.createWriteStream(_dst)
            // 通过管道来传输流
            readable.pipe(writable)
          } else {
            // console.log(_src + ' 不允许被复制!!!')
          }
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          exists(_src, _dst, copyDir)
        }
      })
    })
  })
}
/**
 * 在复制目录前需要判断该目录是否存在，
 * 不存在需要先创建目录
 * @param src
 * @param dst
 * @param callback
 */
const exists = function (src, dst, callback) {
  // 如果路径存在，则返回 true，否则返回 false。
  if (fs.existsSync(dst)) {
    callback(src, dst)
  } else {
    fs.mkdir(dst, function () {
      callback(src, dst)
    })
  }
}
/**
 * 判断数组中的元素是否包含此字符串
 * @param arr
 * @param obj
 * @returns {boolean}
 */
const contains = function (arr, obj) {
  let flag = false
  arr.map((val) => {
    if (obj.includes(val)) {
      flag = true
    }
  })
  return flag
}

inquirer.prompt(questions).then(async (res) => {
  const { type, name, number } = res
  const dirName = name
  const dirPath = path.resolve(__dirname, '../../src')
  const exist = await fs.existsSync(dirPath + '/' + dirName)
  if (exist) {
    console.error(chalk.hex('#ff4d4f').bold('dir is exist in ' + dirPath))
    process.exit()
  }
  await mkdir(dirPath + '/' + type + '/' + number + '_' + dirName)
  exists(
    'scripts/create-template/template/',
    dirPath + '/' + type + '/' + number + '_' + dirName,
    copyDir
  )
})

const mkdir = async (src, option = { recursive: true }) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(src, option, (err) => {
      if (err) {
        reject(err)
      }
      resolve(src)
    })
  })
}
