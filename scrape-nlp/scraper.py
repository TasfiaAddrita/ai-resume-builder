from bs4 import BeautifulSoup
import requests
from nltk.corpus import stopwords
import sys
import csv
import pandas as pd
import matplotlib.pyplot as plt
import nlp
import Ngram


# Test URL https://www.usajobs.gov/GetJob/ViewDetails/576145500#locations

def scrape():
    url = input('Enter Job URL to scrape: ')
    url = requests.get(url).text
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
    file = open("nasa-test.txt", "w+")
    datas = [title, dept, loc, summary_title, summary_text, response_title, response_text, qual, edu_title, edu_text]
    for data in datas:
        file.write(data)
    file.close()
    return datas

def eda():
    output = open("nasa-test.txt", 'r')
    output_lines = output.read().lower()
    output_words = output_lines.split()
    output_words = [word for word in output_words if word not in stopwords.words('english')]

    # UNIQUE WORD COUNT
    def unique_words(histogram):
        count = 0
        for i in range(len(histogram)):
            j=0
            for j in range(i):
                if (histogram[i] == histogram[j]):
                    break
            if (i == j + 1): 
                count += 1
        return count
    print("\n\n Unique Words Count: \n", unique_words(output_words))


    # HISTOGRAM
    def histogram(source):
        hist = {}
        b = []
        for i in source:
            hist[i] = hist.get(i, 0) + 1
            a = i, ' => ', hist[i]
            b.append(a)
        return b
    print("\n\n Histogram:\n", histogram(output_words))



    # CREATE CSV
    # opening the csv file in 'w+' mode 
    data = open('data.csv', 'w+', newline ='') 

    # writing the data into the file 
    with data:     
        write = csv.writer(data) 
        write.writerows(histogram(output_words)) 


    # DATAFRAME
    data = pd.read_csv('data.csv', header=None)
    print(data.columns)
    data.head()

    # PLOT
    top_10 = data[0].value_counts()[:10]
    plt.bar(top_10, height = 1)
    top_10.plot(kind='bar')
    plt.show(top_10)


if __name__ == '__main__':
    scrape()
    input("Press Enter to perform NLP (Natural Language Processing)...")
    nlp.perform_nlp()
    input("Press Enter to generate a Resume...")
    Ngram.ngram()
    Ngram.generate()
    # eda()
