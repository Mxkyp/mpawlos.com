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

## Kubernetes in a month of lunches.

 ## Questions

#### Chapter 2.
1. What is a pod?
  - Pod is a Kubernetes object which manages at least one container. Pods are managed by some **nodes**.
  - Pods communicate with the **Container Runtime Interface** to make sure all needed container are available. (?)
  - The smallest organizational unit of a cluster, mostly created not by hand, and always managed by a **controller**.
  - Sort of primitive.
2. What are deployments?
  - Deployments are special **controllers** that can:
  1. Resurrect a node if it goes offline.
  2. Create many copies of the pod, according to your scaling specifications.
3. How is a cluster structured?
  - a Kubernetes **cluster is composed of nodes**(each pod is in a separate node). 
  - Cluster encompass one network. Each Node has a unique virtual ip address.
4. What are nodes?
  - Nodes manage pods and containers inside of them. The node communicates with the **Container Runtime interface(CRI)** to create, delete  containers and query their state. 
5. What is a controller?
  Controller is a Kubernetes object which communicates with it's API. \
  Validating present state of the cluster and making changes to keep in line with specifications.
6. How do controllers keep track of the state of them cluster?
  - using tags which are created at build-time/runtime and can also be altered.
  - Altering tags can lead to deployments:
    1. **Abandoning a pod** (by changing the expected tag to something else). This should force the deployment to create a new pod.
    2. **Adopting a pod** (by changing tag of somepod to the one expected by a deployment). \
       This should force the deployment to delete a node if a pod is healthy(has the expected amount of pods).
7. What are application manifests?
  - Application manifests are recipies for building a app, that allow it to be build in any cluster. 
  - Can be written in both JSON and YAML(preferred).

#### Chapter 3
1. What is a service>? What's its use?
  Service is a variable resource which is responsible for providing communication between pods. Basing the communication on ip would be unwise, becuase if a pod goes offline and gets replaced it's ip will most probably change. So we do not try to reinvent the wheel and we use good'ol dns.
2. INVESTIGATE (Had problem pulling image after restarting pc, even though k3d said the cluster is running. deleting and creating it fixed the problem)()
3. What kind of networking transmission protocols does Kubernetes allow?
TCP and UDP. Pings are rejected because they are icmp.
4. How much of the app is defined in manifests?
5. What the purpose and use of LoadBalancer, nodePort and externalName services?
