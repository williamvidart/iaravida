// Convert HEIC files to JPEG using sharp (if available) or via Windows codec
import { execSync } from 'child_process';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const portfolioDir = new URL('../public/portfolio', import.meta.url).pathname.slice(1).replace(/\//g, '\\');
const heicFiles = readdirSync(portfolioDir).filter(f => f.toLowerCase().endsWith('.heic'));

console.log(`Found ${heicFiles.length} HEIC files to convert`);

for (const file of heicFiles) {
  const inPath = join(portfolioDir, file);
  const outPath = join(portfolioDir, file.replace(/\.heic$/i, '.jpg'));
  if (existsSync(outPath)) { console.log(`Skip: ${file} (already converted)`); continue; }

  // Try using Windows built-in via PowerShell
  const ps = `
Add-Type -AssemblyName System.Drawing
try {
  $img = [System.Drawing.Image]::FromFile('${inPath.replace(/\\/g, '\\\\')}')
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]88)
  $img.Save('${outPath.replace(/\\/g, '\\\\')}', $codec, $params)
  $img.Dispose()
  Write-Host "OK: ${file}"
} catch {
  Write-Host "FAIL: ${file}: $_"
}
`.trim();

  execSync(`powershell -Command "${ps.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
}
