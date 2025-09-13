---
  title: Kubernetes controllers
  tags: 
    - Technical
---

# Simply
  Controller is a Kubernetes object which communicates with it's API. \
  Validating present state of the cluster and making changes to keep in line with specifications.

6. How do controllers keep track of the state of the cluster?
  - using labels which are created at build-time/runtime and can also be altered.
  - Altering labels can lead to deployments:
    1. **Abandoning a pod** (by changing the expected label to something else). This should force the deployment to create a new pod.
    2. **Adopting a pod** (by changing label of somepod to the one expected by a deployment). \
       This should force the deployment to delete a pod  if a node is healthy(has the expected amount of pods).
## Types
  1. **Deployments** make sure that the specified amount of pods with specific labels are running, they recreate a pod if it goes offline, terminate a pod if it's excess.
