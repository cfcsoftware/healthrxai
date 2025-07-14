# import os
# import paramiko

# VPS_HOST = os.getenv("VPS_HOST")
# VPS_USER = os.getenv("VPS_USER")
# VPS_PASSWORD = os.getenv("VPS_PASSWORD")

# def ssh_connect():
#     """Establishes an SSH connection to the VPS."""
#     ssh = paramiko.SSHClient()
#     ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
#     ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASSWORD)
#     print("SSH connection established")
#     return ssh