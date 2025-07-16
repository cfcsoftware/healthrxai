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


import numpy as np
from scipy.optimize import fsolve

# Given values
P = 1449000  # Loan Amount
EMI = 35018  # Monthly EMI
n = 60       # Tenure in months

# EMI formula: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
# Solve for r (monthly interest rate)

def emi_equation(r):
    return (P * r * (1 + r)**n) / ((1 + r)**n - 1) - EMI

# Initial guess for monthly interest rate
r_guess = 0.01  # 1%

# Solve for monthly rate using fsolve
monthly_rate = fsolve(emi_equation, r_guess)[0]

# Convert to annual interest rate
annual_rate_percent = monthly_rate * 12 * 100

print(f"Annual Interest Rate: {annual_rate_percent:.2f}%")
