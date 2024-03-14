# Import module
from tkinter import *
from tkinter import messagebox

# Create object
root = Tk()
root.title("WINDOW")
root.attributes('-fullscreen', True)
# Adjust size
root.geometry("400x400")

# Create transparent window
root['bg'] = "blue";
root.attributes('-transparent','blue')

#setting up button click event
def show_msg():
   messagebox.showinfo("Message","Hello world!")

# Create a Button
btn = Button(root, text = 'Click me !', bd = '5',command = show_msg) 
 
# Set the position of button on the top of window.   
btn.place(relx=0.125, rely=0.9, anchor='center')

# Execute tkinter
root.mainloop()
