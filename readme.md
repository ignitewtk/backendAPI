npm install jest --save-dev

### Test

Test at local device
```
npm run test
```
Test at Azure Pipeline
- configure azure-pipeline.yaml
- commit and push
- pipeline is automatically triggered when there is updates at main branch.

### Build Docker Artifect

Build image and container at local device
```
docker build ./ t backend
```
Configure Port 3050, run in Docker Desktop.

Access it by HTTP request:
https://localhost:3050/xxx
https://localhost:3050/xxx/page1


Build at Azure Pipeline




