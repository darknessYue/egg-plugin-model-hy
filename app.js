const assert = require('assert');
const { createConnection } = require('mongoose');
const { join } = require('path');

class AppBoot {
  constructor(app) {
    this.app = app;
    const { url } = this.app.config.mongoose;
    assert(url, '[egg-mongoose] url is required');
    const db = createConnection(url, this.app.config.mongoose.options);
    db.on('connected', () => {
      app.logger.info(`[egg-mongoose] ${url} connected successfully`);
    });
    app.mongoose = db;
  }


  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    const dir = join(this.app.config.baseUrl, 'app/model');
    this.app.loader.loadToApp(dir, 'model', {
      caseStyle: 'upper',
    });
  }

}

module.exports = AppBoot;
