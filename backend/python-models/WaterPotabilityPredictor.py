from pickle import load
import warnings
import numpy as np
from sys import argv
import os


warnings.filterwarnings('ignore')

current_directory = os.getcwd()
items = os.listdir(current_directory)
items_string = ', '.join(items)
print(items_string)

