#!/bin/bash
# Ezoic ads.txt 自动更新脚本
# 使用此脚本设置每日定时任务（cron），自动更新 ads.txt 文件

# 目标文件路径（Next.js public 目录）
ADS_TXT_FILE="public/ads.txt"

# Ezoic ads.txt 服务器 URL（已替换为实际域名）
EZOIC_URL="https://srv.adstxtmanager.com/19390/www.hotelcorporatecodes.com"

# 下载并更新 ads.txt 文件
curl -L "$EZOIC_URL" -o "$ADS_TXT_FILE"

# 验证文件是否成功下载
if [ -f "$ADS_TXT_FILE" ]; then
    echo "ads.txt 文件已成功更新: $(date)"
else
    echo "错误: ads.txt 文件更新失败: $(date)"
    exit 1
fi

