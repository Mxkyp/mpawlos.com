---
  Title: Kubernetes
  Tags: 
    - Technical
---

<!-- Backlinks -->
[](./Containers.md) [](./Docker.md) [](./Containerd)
<!-- Backlinks -->

# Simply 
A system that launches containers, and manages them.

It's core building blocks include [pods](./Kubernetes_pod.md), [nodes](./Kubernetes_node.md) [controllers](./Kubernetes_controller.md) and [services](./Kubernetes_service.md).

## Kubernetes in a month of lunches.

 ## Questions

#### Chapter 2.

3. How is a cluster structured?
  - a Kubernetes **cluster is composed of nodes**(each pod is in a separate node). 
  - Cluster encompass one network. Each Node has a unique virtual ip address.

4. What are nodes? TODO: **KUBELETS** are missing here.
  - Nodes manage pods and containers inside of them. The node communicates with the **Container Runtime interface(CRI)** to create, delete  containers and query their state. 
  - If a container goes down, the node brings it back up


7. What are application manifests?
  - Application manifests are recipies for building a app, that allow it to be build in any cluster. 
  - Can be written in both JSON and YAML(preferred).

#### Chapter 3
