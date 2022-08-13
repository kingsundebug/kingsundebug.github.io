
export default class Myqueue {
  constructor(maxlimit = 10) {
    this.taskList = []
    this.maxlimit = maxlimit
    setTimeout(() => {
      this.run()
    }, 0)
  }
  run() {
    const min = Math.min(this.maxlimit, this.taskList.length)

    for (let i = 0; i < min; i++) {
      const ele = this.taskList[i]
      const task = this.taskList.shift()
      console.log(task === ele, 'task')
      task().then(res => {
        console.log(res, 'res')
      }).catch(err => {
        console.log(err, 'err')
      }).finally(msg => {
        this.run()
      })
    }
  }
  addTask(task) {
    this.taskList.push(task)
  }
}

