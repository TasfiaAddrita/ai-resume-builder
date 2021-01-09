from bs4 import BeautifulSoup
import requests

# Test URL https://www.usajobs.gov/GetJob/ViewDetails/576145500#locations

# with open("nasa.htm") as html_file:
#     soup = BeautifulSoup(html_file, 'lxml')
# print(soup.prettify())
input = input('Enter URL: ')
url = requests.get(input).text
soup = BeautifulSoup(url, 'lxml')


title = soup.find('h1').text
dept = soup.find('h5', class_='usajobs-joa-banner__dept').text
loc = soup.find('a', class_='usajobs-joa-banner__agency').text
print(title, dept, loc)

for header in soup.find_all('h2', class_='usajobs-joa-section__header'):
    head = header.text
    print(head)
