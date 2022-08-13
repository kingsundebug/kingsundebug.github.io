export default class RequestQueue {
  constructor(maxLimit = 5, retryLimit = 2) {
    // 最大同时请求数
    this.maxLimit = maxLimit
    // 尝试总数
    this.retryLimit = retryLimit

    // 等待执行的任务队列
    this.taskQueue = []
    // 当前请求并发数
    this.currentRequestCount = 0

    // 当前请求成功数
    this.doneCount = 0
  }

  /*
   *@functionName:  exec
   *@params1: request(异步请求 调用测传入 需为Promise实例)
   *@params2: callBack 回调函数 一般用于前端progress统计当前进度
  */
  async exec(request, callBack = () => {}) {
    let result = []

    // 并发限制
    if (this.currentRequestCount >= this.maxLimit) {
      await this.pause() // 暂停执行 入队
    }

    // 执行队列长度+1
    this.currentRequestCount++

    // 设置队列当前任务的执行次数
    for (let retryCount = this.retryLimit; retryCount > 0; retryCount--) {
      let done = false
      try {
        // request传入的必须是一个promise实例
        result = await request()
        done = true
        this.doneCount++
        return Promise.resolve(result)
      } catch (error) {
        // 最后一次重试失败时停止重试，返回报错
        if (retryCount === 1) {
          done = true
          return Promise.reject(error) // 错误只会抛出一次
        }
      } finally {
        if (done) {
          callBack(this.doneCount)
          this.currentRequestCount--
          this.next() // 任务队列首部出队
        }
      }
    }
  }

  next() {
    if (this.taskQueue.length <= 0) return
    const resolve = this.taskQueue.shift()
    resolve() // 取出任务队列首部执行
  }

  pause() {
    // 入队 将promise对象入队 不rosolve之前无法执行下个任务
    return new Promise((resolve) => this.taskQueue.push(resolve))
  }
}
