from bs4 import BeautifulSoup
import requests

# Test URL https://www.usajobs.gov/GetJob/ViewDetails/576145500#locations


input = input('Enter URL: ')
url = requests.get(input).text
soup = BeautifulSoup(url, 'lxml')


title = soup.find('h1').text
dept = soup.find('h5', class_='usajobs-joa-banner__dept').text
loc = soup.find('a', class_='usajobs-joa-banner__agency').text
print(title, dept, loc)
print(soup.find(id='duties').h3.text, end='\n\n') #summary title
print(soup.find(id='duties').p.text, end='\n\n') #summary text
print(soup.findAll('h3')[2].text) #responsibilities title
print(soup.findAll(id='duties')[1].text) #responsibilities text
print(soup.find(id="qualifications").text) # qualifications title and text