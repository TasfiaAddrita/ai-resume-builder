from bs4 import BeautifulSoup
import requests

# Test URL https://www.usajobs.gov/GetJob/ViewDetails/576145500#locations


input = input('Enter URL: ')
url = requests.get(input).text
soup = BeautifulSoup(url, 'lxml')

# Scrape data from url
title = soup.find('h1').text
dept = soup.find('h5', class_='usajobs-joa-banner__dept').text
loc = soup.find('a', class_='usajobs-joa-banner__agency').text
summary_title = soup.find(id='duties').h3.text #summary title
summary_text = soup.find(id='duties').p.text #summary text
response_title = soup.findAll('h3')[2].text #responsibilities title
response_text = soup.findAll(id='duties')[1].text #responsibilities text
qual = soup.find(id="qualifications").text # qualifications title and text
edu_title = soup.find(id="requirements").findAll('div')[2].h3.text #education title
edu_text = soup.find(id="requirements").findAll('div')[2].p.text  #education text

# Print to console
print(title, dept, loc)
print(summary_title, end='\n\n')
print(summary_text, end='\n\n')
print(response_title)
print(response_text)
print(qual)
print(edu_title)
print(edu_text)

# Save to txt file
file = open("nasa-test.txt", "x")
datas = [title, dept, loc, summary_title, summary_text, response_title, response_text, qual, edu_title, edu_text]
for data in datas:
    file.write(data)
file.close()