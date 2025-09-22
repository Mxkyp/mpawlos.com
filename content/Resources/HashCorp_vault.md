---
  Title: HashiCrop Vaul
  Tags: 
    - Infrastructure
---

# Why?
The core idea is the centralization of secret management.
1. Prevent "sprawl" - holding secrets in many different, mostly insecure places.
  - Allow the usage of certain secrets only to certain groups.
  - Track the use of secrets.
  - Ensure encryption on site and in transit.
2. Save secrets from apps, because we consider all of them insecure by design (logging systems etc.).
  - ephemeral secrets ex. keys regenerated every 10 days. 
  - unique for each user (allow for pinpointing the attack direction)
3. Reduce security concerns from **poorly implemented cryptography by developers**.

## CLI 

### Startup
1. ``` vault server (OPTIONS) - create the vault ```
2. ``` export VAULT_ADDR=(copied address) ```
3. ``` export VAULT_CACERT=(copied certified authority file path) ``` **you will only be able to use the vault if you have 2.,3.**
4. ``` vault login ``` - you will be prompted to enter the token you've chosen at the vault creation.
5. ``` vault status ```
6. ``` pkill vault``` - kill vault from anywhere
7. ``` UNSET VAULT_CACERT VAULT_ADDR``` 
