const fs = require("fs");
const { spawn } = require("child_process");
const commander = require("commander");
const prompts = require("prompts");
const { getVuepressPath } = require("../utils/convert");
const { exclude } = require("../utils/common");

const configs = fs.readdirSync(getVuepressPath("./configs"));
const targets = exclude(["common.js"], configs).map((target) =>
  target.replace(/\.js$/, "")
);

async function getAnswer() {
  return await prompts({
    type: "select",
    name: "note",
    message: "select note",
    choices: targets.map((target) => ({ title: target, value: target })),
  });
}

commander
  .command("serve")
  .arguments("[note]")
  .action(async function(note, command) {
    const target = targets.includes(note)
      ? note
      : await (await getAnswer()).note;

    const script = `cross-env target=${target} vuepress dev notes`;
    spawn(script, { shell: true, stdio: "inherit", cwd: process.cwd() });
  });

// NOTE: github 只支持 docs/ 和 (root)/ 下静态部署，无需 --all 选项
commander
  .command("build")
  .arguments("[note]")
  .action(async function(note, cmd) {
    const target = targets.includes(note)
      ? note
      : await (await getAnswer()).note;

    const script = `cross-env target=${target} vuepress build notes`;
    spawn(script, { shell: true, stdio: "inherit", cwd: process.cwd() });
  });

commander.parse(process.argv);
