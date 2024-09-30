from nsetools import Nse
from pprint import pprint # noqa F401, E402
nse=Nse()

Gainers = nse.get_index_list()
print(Gainers)

# import requests

# url = 'https://www.nseindia.com/api/'
# response = requests.get(url, allow_redirects=True)  # Allow redirects
# print(response.status_code)
# print(response.url)  # Print the final URL after redirection
