import pandas as pd 
import csv
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from sklearn.model_selection import train_test_split


def perform_nlp():
    # Load data
    with open('nasa-test.txt', 'r') as file:
        data = file.read().replace('\n', '')

    # Create word tokens
    word_tokens = word_tokenize(data)

    # removes non alphabetic 
    word_tokens = [word for word in word_tokens if word.isalpha()]

    # remove stop words
    stop_words = set(stopwords.words('english'))
    filtered_sentence = [w for w in word_tokens if not w in stop_words]

    # Create filtered list
    filtered_sentence = []
    for w in word_tokens:
        if w not in stop_words:
            filtered_sentence.append(w)

    # Most common words
    all_words = nltk.FreqDist(filtered_sentence)
    most_common_words = all_words.most_common(15)
    print("\n\n Here are the 15 most occuring words from the job listing: \n\n", most_common_words, "\n\n")
    return(most_common_words)



if __name__ == '__main__':
    perform_nlp()