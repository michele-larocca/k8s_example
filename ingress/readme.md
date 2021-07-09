# Ingress NGINX

1. Creare il cluster con delle configurazioni necessarie per l'ingress 
    (Settare il nodo con la label ingress-ready=true)

    `kind create cluster --config=config.cluster.yml`

2. Eseguire il run del NGINX Ingress Controller

    `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml`

3. Attendere finchè il processo sia Ready

    `kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller  --timeout=90s`

4. Eseguire il file manifest del Ingress

    `kubectl apply -f ingress.yml`