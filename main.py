from tkinter import *

window = Tk()
window.geometry("300x300")
window.title("Cookie Clicker")
window.configure(bg='darkblue')
number = 0
multiplier = 1
def ClickBtn():
    global multiplier
    global number
    number += multiplier
    ShowInfo["text"] = "Your Score Is " + str(number)
    Score = str(number)
    if number > 9:
        multiplier = 2
    if number > 99:
        multiplier = 4
    if number > 999:
        multiplier = 16
    if number > 9999:
        multiplier = 256
    if number > 99999:
        multiplier = 65536
    ShowInfo["text"] = "Your Multiplier Is " + str(multiplier)

ClickingButton = Button(window, text="Click Me!", command=ClickBtn, bg='white',
fg="black", font=("Arial", 22))
ShowInfo = Label(window, text="Your Score Is 0", font=("Arial", 20),fg = "black")
ClickingButton.pack()
ShowInfo.pack()
window.mainloop()