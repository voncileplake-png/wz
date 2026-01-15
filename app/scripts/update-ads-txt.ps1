# Ezoic ads.txt 自动更新脚本 (PowerShell)
# 使用此脚本设置 Windows 定时任务，自动更新 ads.txt 文件

# 目标文件路径（Next.js public 目录）
$AdsTxtFile = Join-Path $PSScriptRoot "..\public\ads.txt"

# Ezoic ads.txt 服务器 URL（已替换为实际域名）
$EzoicUrl = "https://srv.adstxtmanager.com/19390/hotelcodeshub.com"

try {
    # 下载并更新 ads.txt 文件
    Invoke-WebRequest -Uri $EzoicUrl -OutFile $AdsTxtFile -UseBasicParsing
    
    if (Test-Path $AdsTxtFile) {
        Write-Host "ads.txt 文件已成功更新: $(Get-Date)" -ForegroundColor Green
    } else {
        Write-Host "错误: ads.txt 文件更新失败: $(Get-Date)" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "错误: 无法下载 ads.txt 文件: $_" -ForegroundColor Red
    exit 1
}

