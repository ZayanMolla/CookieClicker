from tkinter import *

window = Tk()
window.geometry("300x300")
window.title("Cookie Clicker")
window.configure(bg='darkblue')
number = 0

def ClickBtn():
    global number
    number += multiplier
    ShowInfo["text"] = "Your Score Is " + str(number)
    Score = str(number)
    if number > -1:
        multiplier = 1
    if number > 9:
        multiplier = 2

ClickingButton = Button(window, text="Click Me!", command=ClickBtn, bg='white',
fg="black", font=("Arial", 22))
ShowInfo = Label(window, text="Your Score Is 0", font=("Arial", 20),fg = "black")
ClickingButton.pack()
ShowInfo.pack()
window.mainloop()