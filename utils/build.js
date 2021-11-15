const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const { ncp } = require("ncp");
const rimraf = require("rimraf");

const BUILD_TARGETS = [
  {
    name: "velog",
    type: "static",
  },
  {
    name: "to-do-list",
    type: "static",
  },
  {
    name: "d-day-calc",
    type: "react",
  },
  {
    name: "github-profile-finder",
    type: "react",
  },
  {
    name: "velog-clone-coding",
    type: "react",
  },
];

const rootPath = process.cwd();
const distPath = path.join(rootPath, "dist");

async function main() {
  if (fs.existsSync(distPath)) {
    await rmrf(distPath);
  }
  fs.mkdirSync(distPath, { recursive: true });

  for (const target of BUILD_TARGETS) {
    console.log(`\n# Building ${target.name}...`);

    const workingDirectory = path.join(rootPath, target.name);

    if (!fs.existsSync(workingDirectory)) {
      console.error(`Project name "${target.name}" was not found.`);
      continue;
    }

    if (target.env) {
      setEnv(target.env);
    }

    if (target.type === "static") {
      await copy(
        path.join(rootPath, target.name),
        path.join(distPath, target.name)
      );
    } else if (target.type === "react") {
      if (!fs.existsSync(path.join(workingDirectory, "package.json"))) {
        console.log("package.json does not exists.");
        continue;
      }

      await runCommand("yarn install", workingDirectory);
      await runCommand("yarn build", workingDirectory);
      const outputPath = path.join(workingDirectory, "build");
      await copy(outputPath, path.join(distPath, target.name));
    }
  }
}

function runCommand(command, path = process.cwd()) {
  return new Promise((resolved, reject) => {
    exec(command, { cwd: path }, (err, stdout, stderr) => {
      if (err) {
        reject(
          new Error(`Command "${command}" throws with error:\n${stderr}"`)
        );
      }
      console.log(stderr);
      console.log(stdout);
      resolved();
    });
  });
}

function copy(from, to) {
  return new Promise((resolved, reject) => {
    ncp(from, to, (err) => {
      if (err) {
        reject(
          new Error(`Copying directory from "${from}" to "${to}" failed.`)
        );
      }
      resolved();
    });
  });
}

function rmrf(path) {
  return new Promise((resolve, reject) => {
    rimraf(path, (err) => {
      if (err) {
        reject(new Error(`Cannot delete "${path}".`));
      }
      resolve();
    });
  });
}

function setEnv(envs) {
  for (const key in envs) {
    process.env[key] = envs[key];
  }
}
main();
