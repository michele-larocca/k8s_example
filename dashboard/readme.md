1. Installare la Dashboard Ui

    `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml`

2. Attivare il proxy della dashboard 

    `kubectl proxy`

3. Creare un Service Account per loggarsi sulla Dashboard

    `kubectl apply -f ./admin.serviceaccount.yaml`

4. Creare un ClusterRoleBinding

    `admin.clusterrolebinding.yaml`

5. Visualizzare il Token utile alla login della Dashboard

    `kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"`

6. Collegarsi tramite browser sulla Dashboard

    `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/`

7. Inserire il Token generato al punto 5. ed effettuare il login