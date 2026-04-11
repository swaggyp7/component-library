Step 1
Build docker file: docker build -t lin_yuteng_coding_assignment12 .

Step 2
Run docker container by: docker run --rm -p 8083:80 lin_yuteng_coding_assignment12
--rm: remove container when it stoped
-p: set docker process to 8083
8083: local port
80: nginx default port running in docker container

Step 3
Visit http://localhost:8083 in browser

# husky commit lint convention: 
- type(scope?): subject
- type must in: build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test
- subject cannot end with .