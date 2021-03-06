import { cd, exec, echo, touch } from "shelljs";
import { readFileSync } from "fs";
import url from "url";

let repoUrl;
let pkg = JSON.parse(readFileSync("package.json") as any);
if (typeof pkg.repository === "object") {
  if (!pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section");
  }
  repoUrl = pkg.repository.url;
} else {
  repoUrl = pkg.repository;
}

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || "") + (parsedUrl.path || "");
let ghToken = process.env.GH_TOKEN;

echo("Deploying docs!!!");
cd("docs");
touch(".nojekyll");
exec("git init");
exec("git add .");
exec('git config user.name "wangshangwen"');
exec('git config user.email "wangshangwen"');
exec('git commit -m "docs(docs): update gh-pages"');
exec(`git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`);
echo("Docs deployed!!");
