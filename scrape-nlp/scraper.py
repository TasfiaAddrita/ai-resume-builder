from bs4 import BeautifulSoup

soup = BeautifulSoup(open("repos.html"), features="lxml")

print(soup.prettify())