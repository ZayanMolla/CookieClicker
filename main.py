from tkinter import *

window = Tk()
window.geometry("300x300")
window.title("Cookie Clicker")
window.configure(bg='darkblue')
number = 0
multiplier = 1
auto_clicker_active = False

def ClickBtn():
    global multiplier
    global number
    number += multiplier
    ShowInfo["text"] = "Your Score Is " + str(number) + "\nYour Multiplier Is " + str(multiplier)
    if number > 9:
        multiplier = 2
    if number > 99:
        multiplier = 4
    if number > 999:
        multiplier = 16
    if number > 9999:
        multiplier = 256
    if number > 99999:
        multiplier = 1024

auto_clicker_cost = 1000
def buy_auto_clicker():
    global number, auto_clicker_active
    if number >= auto_clicker_cost and not auto_clicker_active:
        number -= auto_clicker_cost
        auto_clicker_active = True
        ShowInfo["text"] = "Auto Clicker Activated! Your Score Is " + str(number)
        auto_clicker()

def auto_clicker():
    global number
    if auto_clicker_active:
        number += 1
        ShowInfo["text"] = "Your Score Is " + str(number) + "\nYour Multiplier Is " + str(multiplier)
        window.after(100, auto_clicker)  # 100 ms = 0.1 second

ClickingButton = Button(window, text="Click Me!", command=ClickBtn, bg='white',
fg="black", font=("Arial", 22))
BuyAutoClickerButton = Button(window, text="Buy Auto Clicker (1000)", command=buy_auto_clicker, bg='yellow',
fg="black", font=("Arial", 14))
ShowInfo = Label(window, text="Your Score Is 0", font=("Arial", 20),fg = "black")
ClickingButton.pack()
BuyAutoClickerButton.pack()
ShowInfo.pack()
window.mainloop()