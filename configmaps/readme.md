1. Delete any ConfigMaps you added into k8s above via:

    `kubectl delete cm app-settings`

2. Build image: `docker build -t node-configmap ./node-app`
3. Create ConfigMap:

    `kubectl create cm app-settings --from-env-file=./settings-configmap/settings.config`

    OR

    `kubectl create -f ./settings-configmap/settings.configmap.yml`

4. Create deployment:

    `kubectl apply -f ./pod-deployment/node.deployment.yml`

5. Port forward the Pod:

    `kubectl port-forward [pod-name] 9000`

6. Visit `http://localhost:9000` and view the ConfigMap settings output