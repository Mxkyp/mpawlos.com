---
  Title: Kubernetes networking 
  Tags: 
    - Technical
---

Each [Kubernetes](../../Areas/Tech-Stack/Kubernetes.md) pod gets assigned a *distinct ip address at random*. Therefore its **unwise** to use ip addresses. 
Kubernetes cluster has a DNS service that resolves the [service](./Kubernetes_service.md) ip based on the metadata name.

```yaml
metadata:
  name: yeti # this will be used as a domain name by kubeDNS
```
