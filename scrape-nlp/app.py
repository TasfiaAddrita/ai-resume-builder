
"""
TODO:refactor all code
"""

from flask import Flask, render_template, request, url_for
from random import randrange, choice, randint
import Ngram
import scraper

app = Flask(__name__)

with open('nasa-test.txt', 'r') as file:
    words = file.read().replace('\n', '')
    output = file.read()

ngrams=Ngram.ngram()

@app.route('/')
def home():
    random_runs = randint(1, 300)
    # runs = request.args.get('runs', default = 20, type = int)  # number of runs to do
    resume = Ngram.generate()
    return render_template('index.html', resume=resume, random_runs=random_runs)



@app.route('/scrape')
def scrape():
    with open('nasa-test.txt', 'r') as file:
        output = file.read()
    return render_template('scrape.html', output = output)



if __name__ == '__main__':
    app.run(debug=True)