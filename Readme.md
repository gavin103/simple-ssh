# A Simple SSH / SCP Tool

1. [Lerna Monorepo 项目搭建](https://juejin.cn/post/6844903918279852046)
2. 使用```yarn install```安装依赖
3. 使用```yarn start```或者```yarn dev:web```启动web服务
4. 使用```npx lerna clean```删除modules中的node_modules
5. 使用```yarn workspace [module name] add [package name]```给某个包添加依赖。例：
   ```
   yarn workspace web add antd 
   // 给modules中的web添加antd依赖
   ```

react+ts的例子：https://github.com/wooline/medux-react-admin

# 功能分配
| 开发者     | 功能             |
| ---------- | ---------------- |
| Wiken      | 主机列表增删改查 |
| 我就皮一下 | 操作日志         |
| 何阳       | SFTP             |
| 心无旁骛   | SSH              |
| 张松       | 项目搭建         |
| Gavin向东  | Node             |
