# Ezoic ads.txt 配置说明

## ✅ 已配置的合并方案（保护 Google AdSense）

项目已使用 **智能合并 API 路由**方法配置 ads.txt，确保 **Google AdSense 和 Ezoic 的 ads.txt 条目都被包含**。

### 配置位置
- 文件: `app/ads.txt/route.ts`
- Google AdSense Pub ID: `ca-pub-4502547559187668`
- Ezoic 服务器: `https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com`

### 工作原理
当用户访问 `https://www.hotelcorporatecodes.com/ads.txt` 时：

1. **自动获取 Ezoic 的 ads.txt 内容**
2. **检查是否已包含 Google AdSense 条目**
   - 如果已包含：直接使用 Ezoic 的内容（确保完整性）
   - 如果未包含：合并 Google AdSense + Ezoic 内容
3. **返回合并后的 ads.txt 文件**

### 保护机制
- ✅ **始终确保包含 Google AdSense**：如果 Ezoic 内容中没有，会自动添加
- ✅ **智能去重**：避免重复的 Google AdSense 条目
- ✅ **容错处理**：如果无法获取 Ezoic 内容，至少返回 Google AdSense 的条目
- ✅ **自动缓存**：24 小时缓存，提升性能

### 优势
- ✅ **不会覆盖 Google AdSense**：确保两个广告网络都正常工作
- ✅ **自动同步更新**：Ezoic 内容自动更新
- ✅ **智能合并**：自动处理重复和缺失的情况

---

## 备选方案：自动更新（高级）

如果您想使用静态文件而不是重定向，可以使用以下方法：

### 方法 1: 使用脚本自动更新（推荐用于服务器环境）

#### Linux/macOS (Bash)
```bash
# 每日自动运行此命令
curl -L https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com > public/ads.txt
```

#### Windows (PowerShell)
```powershell
# 每日自动运行此命令
Invoke-WebRequest -Uri "https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com" -OutFile "public\ads.txt"
```

#### 设置定时任务

**Linux (Cron):**
```bash
# 编辑 crontab
crontab -e

# 添加以下行（每天凌晨 2 点执行）
0 2 * * * /path/to/scripts/update-ads-txt.sh
```

**Windows (任务计划程序):**
1. 打开"任务计划程序"
2. 创建基本任务
3. 设置为每日执行
4. 操作设置为运行 PowerShell 脚本：`scripts\update-ads-txt.ps1`

### 方法 2: 其他服务器配置

如果您使用其他 Web 服务器（Apache、Nginx 等），也可以配置服务器级重定向：

#### Apache (.htaccess)
```apache
Redirect 301 /ads.txt https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com
```

#### Nginx
```nginx
server {
  location ~ /ads.txt {
    return 301 https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com;
  }
}
```

#### PHP
```php
<?php
header('Location: https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com');
exit;
?>
```

---

## 验证配置

配置完成后，访问以下 URL 验证是否正常工作：
- `https://www.hotelcorporatecodes.com/ads.txt`

应该能够看到重定向到 Ezoic 服务器或直接显示 ads.txt 内容。

---

## 注意事项

1. **域名替换**: 所有配置中的域名已替换为 `www.hotelcorporatecodes.com`
2. **缓存**: 重定向方法会自动处理缓存，无需手动清理
3. **更新频率**: 使用重定向方法时，Ezoic 服务器会自动管理更新频率

