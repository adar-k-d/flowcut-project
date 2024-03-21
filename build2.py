# Import module
from tkinter import *
from tkinter import messagebox
import win32gui
import win32con

def hide_shortcuts():
    """Hide shortcuts on the desktop."""
    try:
        # Get the handle of the desktop window
        desktop_handle = win32gui.FindWindow("Progman", "Program Manager")
        # Get the handle of the desktop ListView (where shortcuts are displayed)
        listview_handle = win32gui.FindWindowEx(desktop_handle, 0, "SHELLDLL_DefView", None)
        listview_handle = win32gui.FindWindowEx(listview_handle, 0, "SysListView32", "FolderView")
        # Hide the desktop ListView
        win32gui.ShowWindow(listview_handle, 0)  # SW_HIDE
    except Exception as e:
        print("Error hiding shortcuts:", e)

def show_shortcuts():
    """Show shortcuts on the desktop."""
    try:
        # Get the handle of the desktop window
        desktop_handle = win32gui.FindWindow("Progman", "Program Manager")
        # Get the handle of the desktop ListView (where shortcuts are displayed)
        listview_handle = win32gui.FindWindowEx(desktop_handle, 0, "SHELLDLL_DefView", None)
        listview_handle = win32gui.FindWindowEx(listview_handle, 0, "SysListView32", "FolderView")
        # Show the desktop ListView
        win32gui.ShowWindow(listview_handle, 1)  # SW_SHOW
    except Exception as e:
        print("Error showing shortcuts:", e)


def on_close():
    """Callback function to handle window closing."""
    show_shortcuts()
    root.destroy()

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
root.protocol("WM_DELETE_WINDOW", on_close)
hide_shortcuts()
root.mainloop()
