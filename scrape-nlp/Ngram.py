from random import randrange, choice

# words = "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind."
# words = "how much wood would a woodchuck chuck if a woodchuck could chuck wood."

with open('nasa-test.txt', 'r') as file:
    words = file.read().replace('\n', '')


order = 6
ngrams= {}

def ngram():
    # MAIN NGRAM FUNCTION
    i=0
    for i in range(len(words)-order):
        grams = words[i:i+order]   #takes in 3 characters at a time
        # ngrams.setdefault(grams, 0) # Insert key with a value of default if key is not in the dictionary
        # ngrams[grams]+=1  # increase value count if found again
        if grams not in ngrams.keys():
            ngrams[grams]=[] #make empty if not in ngram
        ngrams[grams].append(words[i+order]) #print next possible char (from ngram[gram[0]])
    return ngrams

# [print(key, value) for key, value in ngrams.items()]  # printing all ngrams
# print(n_gram(words, order))    #for function refactoring 


# SENTENCE GENERATION
def generate():
    test = 2000
    current_gram = words[0:order]  #start at beginning
    result = current_gram
    for i in range(test):
        if current_gram not in ngrams.keys():   # keyError handling
            break
        possibilities = ngrams[current_gram]  #all possibilities
        _next = possibilities[randrange(len(possibilities))]   #choose a random one from possibilities
        result += _next   #add to result
        current_gram = result[len(result)-order:len(result)]   # next 3 of the currently picked gram
    print("\n\n Here is your generated resume:\n\n\n" , result)
    return result

if __name__ == '__main__':
    ngram()
    generate()