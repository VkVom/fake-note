import numpy as np
from PIL import Image
import io
import random
import tkinter as tk
from tkinter import filedialog

def predict_note_authenticity(image_array):
    prediction = random.choice(["Fake", "Real"])  
    return prediction

def handle_upload(image_path):
    try:
        image = Image.open(image_path)
        image_array = np.array(image) 
        result = predict_note_authenticity(image_array)
        
        return f"The note is predicted to be: {result}"
    except Exception as e:
        return f"Error processing the image: {e}"

# File selection dialog
root = tk.Tk()
root.withdraw()  # Hide the main window

file_path = filedialog.askopenfilename(title="Select image file", 
                                          filetypes=(("Image files", ".jpg;.jpeg;*.png"), 
                                                     ("All files", ".")))

if file_path:
    result = handle_upload(file_path)
    print(result)
else:
    print("No file selected.")