# 🌌 节点视界 (Node Horizon)

> **高性能免费节点抓取、聚合与测试工具**

![App Icon](build/appicon.png)

[🇺🇸 English Docs](README.md)

## 📖 项目介绍

**Node Horizon** (原 CC Nexus) 是一款次世代桌面应用，专为聚合、测试和管理来自各类公共源的免费代理节点而设计。

它结合了强大的 Python 爬虫内核与基于 Wails 的现代化极客风 GUI，提供实时监控、可视化数据透视以及基于 GitHub Gist 的无缝云端同步功能。

---

## ✨ 核心功能

- **🚀 一键聚合**: 自动爬取多个来源，智能去重并合并订阅。
- **🧪 连通性测试**: 内置严格的延迟与连通性检查 (Google/Youtube)，确保节点真实可用。
- **☁️ 云端同步**: 将结果 (Clash/SingBox 配置) 自动同步至 GitHub Gist，生成永久有效的远程订阅链接。
- **🎨 现代化界面**: 精美的 "黑客/极客" 主题，支持实时日志流与数据可视化看板。
- **🛡️ 自定义配置**: 支持自定义正则过滤 (Include/Exclude) 与超时设置。

---

## 🛠️ 安装与配置

### 1. 前置要求

- **操作系统**: Windows 10/11 (推荐)
- **网络环境**: 需能正常访问 GitHub API。

### 2. 初始化配置

首次启动后，请务必前往 **"⚙️ 配置管理"** 页面配置云端同步。

#### 必填: Gist 同步设置

为了生成可供 Clash/SingBox 使用的订阅链接，您**必须**配置 GitHub Gist：

1. **生成 Token**: 前往 [GitHub Settings > tokens](https://github.com/settings/tokens)，创建一个拥有 `gist` 权限的 **Classic Token**。
2. **创建 Gist**: 前往 [gist.github.com](https://gist.github.com)，随意创建一个 **公开 (Public)** 的 Gist。
3. **获取 Gist ID**: Gist 网址末尾的那串字符就是 ID (例如 `https://gist.github.com/User/abc123...` -> ID 就是 `abc123...`)。
4. **填入软件**: 将 **Token** 和 **ID** 填入 Node Horizon 的配置页，并点击 **"💾 保存全部配置"**。

#### 进阶: 抓取策略配置

在 **"🛡️ 抓取策略控制"** 卡片中，您可以微调爬虫行为：

- **全局并发线程数 (Threads)**: 默认为 `64`。
  - 调大可加快速度，但可能导致网络拥堵或被封禁。
  - 调小更稳定。建议范围: `32` - `128`。
- **连接超时 (Timeout)**: 默认为 `5000` ms (5秒)。
  - 如果您的网络较差，可适当增加到 `8000` 或 `10000` 以减少误判。
- **排除正则 (Exclude Regex)**:
  - 用于过滤包含特定关键词的节点。
  - 例如: `(官网|不限流量|流量)` 可以过滤掉名称中包含这些词的无效节点。
  - 支持标准正则表达式。

### 3. 依赖安装 (源码运行/开发环境)

如果您需要运行 Python 脚本或进行二次开发，请确保安装以下依赖：

```bash
pip install -r requirements.txt
# 或者手动安装:
pip install PyYAML tqdm geoip2 pycryptodomex fofa-hack
```

### 4. 部署与配置详解

#### 配置文件说明

- **文件名**: `my-config.json`
- **位置**: 位于 `runtime/` 目录下 (即 `runtime/my-config.json`)。
- **注意**: 该文件包含您的 **GitHub Token**，请勿直接分享给他人！如果您想分享软件配置，请先删除文件中的敏感信息。

#### 示例配置内容 (my-config.json)

```json
{
  "domains": [
    {
      "name": "MyCustomSource",      // 自定义源名称
      "sub": "https://example.com/api/v1/client/subscribe?token=xxx", // 订阅链接
      "enable": true
    }
  ],
  "crawl": {
    "num": 64,               // 并发线程数
    "timeout": 5000,         // 连接超时 (毫秒)
    "exclude": ""            // 排除关键词正则，如 "(官网|流量)"
  },
  "cloud": {
    "gistToken": "",         // GitHub Personal Access Token
    "gistID": ""             // Gist ID
  }
}
```

> **提示**: 您可以在 `domains` 列表中添加自己的机场订阅链接，Node Horizon 会自动将其包含在聚合和测试流程中。

---

## 🚀 使用指南

### 第一步: 启动抓取

- 进入 **"📊 运行看板"**。
- 点击 **"🚀 启动抓取"** 按钮。
- 观察控制台日志，核心程序将自动执行爬取、解析和测试任务。

### 第二步: 查看结果

- 当进度条达到 100% 或日志显示 "All Done" 时，进入 **"📂 数据透视"** 页面。
- 您将看到：
  - **统计数据**: 发现节点总数、存活节点数、成功率。
  - **云端文件**: 已上传到您 Gist 的文件列表。
  - **订阅链接**: 您的永久订阅链接 (Clash/SingBox)。

### 第三步: 订阅使用

- 复制底部的 **Clash** 或 **SingBox** 链接。
- 粘贴到您的代理软件 (如 Clash Verge, v2rayN 等) 中。
- 开启代理软件的 "自动更新"，即可享受每日更新的免费节点！

---

## ❓ 常见问题 (FAQ)

**Q: 为什么我看不到订阅链接?**
A: 请检查配置页是否正确填入了 **Gist Token** 和 **Gist ID**。如果留空，软件无法生成您的专属链接。

**Q: 日志显示 "GitHub Connection Error"?**
A: 请检查您的本地网络环境。爬虫需要将结果上传至 `api.github.com`，这需要通畅的网络连接。

**Q: 什么是 "存活节点"?**
A: 指通过了严格连通性测试 (Google/Youtube 连接测试) 的节点。只有这些高质量节点会被写入最终的订阅文件。

---

## 🤝 鸣谢 / Acknowledgements

本项目基于以下优秀的开源项目进行二次开发与深度优化，在此向原作者表示由衷的感谢：

1. **[wzdnzd/aggregator](https://github.com/wzdnzd/aggregator)**
    - 提供了核心的 **Python 爬虫引擎**。
    - 贡献了订阅去重、聚合、以及基于 Clash 的连通性测试逻辑。
    - Node Horizon 的后端数据处理能力主要源于此项目的无私分享。

2. **[lich0821/ccNexus](https://github.com/lich0821/ccNexus)**
    - 提供了基于 Wails 的 **GUI 框架基础**。
    - 为本项目的前端交互与桌面端封装提供了初始设计思路。

---

## ⚠️ 免责声明

本工具仅供**学习与研究网络技术**使用。开发者不对公开源如何获取节点以及最终用户如何使用这些节点承担任何责任。请严格遵守您当地的法律法规。

---
**Node Horizon** - *探索无尽视界*
