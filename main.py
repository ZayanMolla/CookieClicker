from tkinter import *
window = Tk()
window.geometry("300x300")
window.title("Cookie Clicker")
window.configure(bg='b79448')
number = 0
def ClickBtn():
    global number
    number += 1
    ShowInfo["text"] = "You Clicked " + str(number) + "times."
ClickingImage = PhotoImage(file="cookie.png")
ClickingButton = Button(window, image=ClickingImage, command=ClickBtn, bg='fab25f',
fg="blue", font=("Arial", 22), command=ClickBtn)
ShowInfo = Label(window, text="message", font=("Arial", 20),fg = "purple")
ClickingButton.pack()
ShowInfo.pack()
window.mainloop()
