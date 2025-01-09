import requests
import time

# OWASP ZAP Configuration
zap_address = "http://localhost:8080"
api_key = "your-api-key"  # Set in ZAP API settings
target_url = "http://your-website.com"

# Start a new scan
start_scan_url = f"{zap_address}/JSON/ascan/action/scan/"
scan_params = {
    "apikey": api_key,
    "url": target_url,
}

response = requests.get(start_scan_url, params=scan_params)
if response.status_code == 200:
    print("Scan started successfully!")
else:
    print("Error starting scan:", response.text)

# Monitor scan progress
scan_status_url = f"{zap_address}/JSON/ascan/view/status/"
while True:
    status_response = requests.get(scan_status_url, params={"apikey": api_key})
    status = status_response.json().get("status")
    print(f"Scan progress: {status}%")
    if status == "100":  # Scan complete
        break
    time.sleep(10)

# Retrieve scan results
scan_results_url = f"{zap_address}/JSON/core/view/alerts/"
results_response = requests.get(scan_results_url, params={"apikey": api_key})
alerts = results_response.json().get("alerts", [])
print("Scan completed. Vulnerabilities found:")
for alert in alerts:
    print(f"- {alert['alert']} at {alert['url']}")
