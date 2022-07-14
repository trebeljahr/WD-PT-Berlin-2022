$ mkdir git-intro
$ cd git-intro
$ git init
$ git status
$ touch index.html about.html
$ git status
$ git add index.html
$ git status
$ git add .
$ git rm --cached about.html
$ git commit -m "add index.html file"
$ git log

$ git clone https://github.com/ironhack-labs/lab-learn-cloning.git
$ touch another-file.md
$ git add .
$ git commit -m "A test commit"
$ git push
$ git checkout -b another-branch
$ touch yet-another-file.md
$ git add .
$ git commit -m "A test commit on a different branch!"
$ git push ?!
$ git remote show origin
$ git push --set-upstream origin another-branch
$ git remote show origin
$ git remote get-url origin

> click link to create a PR
$ git branch
$ git branch -d another-branch
