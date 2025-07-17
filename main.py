from tkinter import *

window = Tk()
window.geometry("300x300")
window.title("Cookie Clicker")
window.configure(bg='yellow')
number = 0

def ClickBtn():
    global number
    number += 1
    ShowInfo["text"] = "Your Score Is " + str(number)

ClickingButton = Button(window, text="Click Me!", command=ClickBtn, bg='white',
fg="black", font=("Arial", 22))
ShowInfo = Label(window, text="message", font=("Arial", 20),fg = "purple")
ClickingButton.pack()
ShowInfo.pack()
window.mainloop()