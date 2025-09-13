---
  title: Installing Arch - first time
  tags:
---
  
# Why
looks like fun. I love having a thorough understanding of the tech I use. \
I would probably have had installed it way earlier, if i wasn't so in rush all the time, and didn't avoid what i believe will be a humbling experience :).

## Steps taken 
1. I did verify the signature of iso (no way!).
2. connected to wifi using **iwctl** 
3. configured the system clock timezone using **timedatectl**
4. On my old BIOS laptop, I've created 2 partitions:
  - Boot(2G)
  - Root(465 LUKS encrypted with a 4G swapfile)
5. prepared and mounted the partitions according to [Luks on a partition](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#Encrypted_boot_partition_(GRUB))
6. configured dhcp and dns using systemd-resolve and iwd.
7. configured sudo, added non-root user.
8. installed intel drivers, xorg stuff and dwm (major hiccups here)
9.
