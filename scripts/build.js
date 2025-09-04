const path = require('path');
const childProcess = require('child_process');
const fs = require('fs');

async function main() {
  try {
    const rootDir = path.dirname(path.dirname(__dirname));
    process.chdir(rootDir);

    childProcess.execSync('node scripts/utils/check-version.cjs');

    childProcess.execSync('rm -rf dist');
    fs.mkdirSync('dist', { recursive: true });

    childProcess.execSync('cp -rp src README.md dist');
    childProcess.execSync('rm dist/src/_shims/*-deno.ts dist/src/_shims/auto/*-deno.ts');

    ['LICENSE', 'CHANGELOG.md'].forEach(file => {
      if (fs.existsSync(file)) {
        childProcess.execSync(`cp ${file} dist`);
      }
    });

    if (fs.existsSync('bin/cli')) {
      fs.mkdirSync('dist/bin', { recursive: true });
      childProcess.execSync('cp -p bin/cli dist/bin/');
    }

    childProcess.execSync('node scripts/utils/make-dist-package-json.cjs > dist/package.json');

    childProcess.execSync('tsc-multi');

    childProcess.execSync('cp src/_shims/*.{d.ts,js,mjs,md} dist/_shims');
    childProcess.execSync('cp src/_shims/auto/*.{d.ts,js,mjs} dist/_shims/auto');

    childProcess.execSync('node scripts/utils/fix-index-exports.cjs');

    childProcess.execSync('cp tsconfig.dist-src.json dist/src/tsconfig.json');

    childProcess.execSync('node scripts/utils/postprocess-files.cjs');

    childProcess.execSync('cd dist && node -e \'require("conductor-node")\'');
    childProcess.execSync('cd dist && node -e \'import("conductor-node")\' --input-type=module');

    if (fs.existsSync('scripts/build-deno')) {
      childProcess.execSync('childProcess.execSync(`scripts/build-deno`);');
    }

    const packagesDir = 'packages';
    const dirs = fs.readdirSync(packagesDir, { withFileTypes: true });
    dirs.forEach(dir => {
      const dirPath = path.join(packagesDir, dir.name);
      if (dir.isDirectory()) {
        childProcess.execSync(`cd ${dirPath} && yarn install && yarn build`);
      }
    });
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();