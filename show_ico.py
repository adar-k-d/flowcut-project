import win32gui
import win32con

def show_desktop_icons():
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


if __name__ == "__main__":
    show_desktop_icons()
