/* eslint import/no-dynamic-require:0 */
/**
 * NOTE: Due to path issues, this script must be run outside of grunt
 * directly from a powershell command.
 *
 * Code signing is handled separately by Azure Trusted Signing action in the
 * GitHub workflow. This script creates an unsigned installer which is then
 * signed by the workflow after creation.
 */
const path = require('path');
const { createWindowsInstaller } = require('electron-winstaller');

const appDir = path.join(__dirname, '..');
const { version } = require(path.join(appDir, 'package.json'));

const config = {
  usePackageJson: false,
  outputDirectory: path.join(appDir, 'dist'),
  appDirectory: path.join(appDir, 'dist', 'mailspring-win32-x64'),
  loadingGif: path.join(appDir, 'build', 'resources', 'win', 'loading.gif'),
  iconUrl: path.join(appDir, 'build', 'resources', 'win', 'mailspring.ico'),
  description: 'Mailspring',
  version: version,
  title: 'Mailspring',
  authors: 'Ni But Crazy',
  setupIcon: path.join(appDir, 'build', 'resources', 'win', 'mailspring.ico'),
  setupExe: 'MailspringSetup.exe',
  exe: 'mailspring.exe',
  name: 'Mailspring',
};

console.log(config);
console.log('---> 开始创建安装程序');

createWindowsInstaller(config)
  .then(() => {
    console.log('windows 安装包已创建成功.');
    process.exit(0);
  })
  .catch(e => {
    console.error(`windows 安装包已创建失败: ${e.message}`);
    process.exit(1);
  });
