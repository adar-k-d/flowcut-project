import win32gui
import win32con

def hide_desktop_icons():
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


if __name__ == "__main__":
    hide_desktop_icons()
