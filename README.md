# 🌌 Node Horizon

> **High-Performance Free Proxy Aggregator & Tester**

![App Icon](build/appicon.png)

[🇨🇳 中文文档 (Chinese Docs)](README_CN.md)

## 📖 Introduction

**Node Horizon** is a next-generation desktop application designed to aggregate, test, and manage free proxy nodes from various public sources.

It combines a powerful Python-based crawler with a modern, "Geek-style" Wails GUI, offering real-time monitoring, visualization, and seamless cloud synchronization via GitHub Gist.

---

## ✨ Features

- **🚀 One-Click Aggregation**: Automatically crawl multiple sources, deduplicate, and merge subscriptions.
- **🧪 Latency Testing**: Built-in strict latency and connectivity checks (Google/Youtube) to ensure node quality.
- **☁️ Cloud Sync**: Sync results (Clash/SingBox configs) to GitHub Gist for persistent remote access.
- **🎨 Modern GUI**: Beautiful, responsive "Hacker" theme with real-time logs and data visualization.
- **🛡️ Custom Config**: Support for custom include/exclude regex filters and timeout settings.

---

## 🛠️ Installation & Setup

### 1. Prerequisites

- **OS**: Windows 10/11 (Recommended)
- **Network**: Ability to access GitHub API.

### 2. Initial Configuration

Upon first launch, navigate to the **"⚙️ Config Management"** tab to set up Cloud Sync.

#### Essential: GitHub Gist Sync

To generate subscription links that you can use in Clash/SingBox, you **MUST** configure GitHub Gist:

1. **Generate Token**: Go to [GitHub Settings > tokens](https://github.com/settings/tokens) and create a **Classic Token** with `gist` permission.
2. **Create Gist**: Go to [gist.github.com](https://gist.github.com) and create a **Public** Gist (content doesn't matter).
3. **Get Gist ID**: The ID is the string of numbers/letters at the end of your Gist URL (e.g., `https://gist.github.com/User/abc123...` -> ID is `abc123...`).
4. **Save in App**: Paste the **Token** and **Gist ID** into Node Horizon's Config tab and click **"💾 Save"**.

#### Advanced: Strategy Settings

Refine crawler behavior in the **"🛡️ Strategy Control"** card:

- **Global Threads**: Default `64`.
  - Higher values speed up crawling but may cause blocks.
  - Recommended range: `32` - `128`.
- **Timeout**: Default `5000` ms.
  - Increase to `8000`+ if your network is slow.
- **Exclude Regex**:
  - Filter specific nodes by keywords.
  - Example: `(Website|Traffic)` removes nodes with these names.
  - Supports standard RegEx.

#### Configuration File

- **Filename**: `my-config.json`
- **Location**: Generated in the same directory as the executable.
- **Security**: Contains your **GitHub Token**. Do not share this file directly! Remove sensitive fields before sharing.

#### Example Configuration (my-config.json)

```json
{
  "domains": [
    {
      "name": "MyCustomSource",      // Name of your source
      "sub": "https://example.com/api/v1/client/subscribe?token=xxx", // Subscription URL
      "enable": true
    }
  ],
  "crawl": {
    "num": 64,               // Concurrency threads
    "timeout": 5000,         // Connection timeout (ms)
    "exclude": ""            // Exclude regex, e.g., "(Website|Traffic)"
  },
  "cloud": {
    "gistToken": "",         // GitHub Personal Access Token
    "gistID": ""             // Gist ID
  }
}
```

> **Tip**: You can manually add your own subscription links in the `domains` list. Node Horizon will automatically include them in the aggregation process.

---

## 🚀 Usage Guide

### Step 1: Start Crawling

- Go to **"📊 Dashboard"**.
- Click **"🚀 Start Crawl"**.
- Watch the logs as the core crawler executes tasks.

### Step 2: View Results

- Once the progress bar reaches 100% or logs show "All Done", go to **"📂 Data Perspective"**.
- You will see:
  - **Statistics**: Total nodes found, alive nodes, success rate.
  - **Remote Files**: List of files uploaded to your Gist.
  - **Subscription Links**: Your permanent, auto-updating subscription links.

### Step 3: Subscribe

- Copy the **Clash** or **SingBox** link from the bottom card.
- Paste it into your proxy client (Clash Verge, v2rayN, etc.).
- Enable "Auto Update" in your client.

---

## ❓ FAQ

**Q: Why don't I see any subscription links?**
A: Ensure you have correctly configured the **Gist Token** and **Gist ID** in the Config tab. Without these, the app cannot generate a valid user link.

**Q: Logs show "GitHub Connection Error"?**
A: Please check your local network environment. The crawler needs to upload data to `api.github.com`.

**Q: What does "Alive Nodes" mean?**
A: Nodes that passed the rigorous connectivity test. Only these nodes are written to the final subscription file.

---

## 🤝 Acknowledgements

This project is built upon and modified from the following outstanding open-source projects. Special thanks to the original authors:

1. **[wzdnzd/aggregator](https://github.com/wzdnzd/aggregator)**
    - Provided the core **Python Crawler Engine**.
    - Contributed the logic for subscription deduplication, aggregation, and connectivity testing.
    - The backend data processing capability of Node Horizon is largely derived from this project.

2. **[lich0821/ccNexus](https://github.com/lich0821/ccNexus)**
    - Provided the foundational **GUI Framework** based on Wails.
    - Inspired the initial frontend design and desktop encapsulation.

---

## ⚠️ Disclaimer

This tool is for **educational and research purposes only**. The developer is not responsible for how the aggregated nodes have been obtained by the public sources or how they are used by the end-user. Please comply with your local laws and regulations.

---
**Node Horizon** - *Explore the Limitless Network.*
