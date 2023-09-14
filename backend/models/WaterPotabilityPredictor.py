from pickle import load
import warnings
import numpy as np
from sys import argv


warnings.filterwarnings('ignore')

with open(".\weights-pickles\WaterPotability_Final.pkl", 'rb') as fpk:
    model = load(fpk)

# print(model)

ph = 7.5
Hardness = 145
Solids = 19909
Chloramines = 7
Sulfate = 350
Conductivity = 500
Organic_carbon = 14
Trihalomethanes = 50
Turbidity = 4

# ph, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic_carbon, Trihalomethanes, Turbidity = argv[1:]

X = np.array([[ph, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic_carbon, Trihalomethanes, Turbidity]])

try:
    X_pred = ['potable', 'not potable'][model.predict(X)[0]]
    print(X_pred)
except Exception as ex:
    print(ex)

