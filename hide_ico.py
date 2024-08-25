

import win32gui
import win32con
import sys

def toggle_desktop_icons(action):
    list_view_handle = find_list_view_handle()
    if list_view_handle:
        if action == "hide":
            win32gui.ShowWindow(list_view_handle, win32con.SW_HIDE)
        elif action == "show":
            win32gui.ShowWindow(list_view_handle, win32con.SW_SHOW)

def find_list_view_handle():
    def enum_windows_proc(hwnd, lParam):
        if win32gui.IsWindowVisible(hwnd) and win32gui.GetClassName(hwnd) == 'WorkerW':
            child = win32gui.FindWindowEx(hwnd, None, 'SHELLDLL_DefView', None)
            if child:
                list_view = win32gui.FindWindowEx(child, None, 'SysListView32', None)
                if list_view:
                    lParam.append(list_view)
                    return
        progman = win32gui.FindWindow('Progman', 'Program Manager')
        if progman:
            defview = win32gui.FindWindowEx(progman, None, 'SHELLDLL_DefView', None)
            if defview:
                list_view = win32gui.FindWindowEx(defview, None, 'SysListView32', None)
                if list_view:
                    lParam.append(list_view)

    list_view_handles = []
    win32gui.EnumWindows(enum_windows_proc, list_view_handles)
    if list_view_handles:
        return list_view_handles[0]
    else:
        return None

if __name__ == "__main__":
    if len(sys.argv) > 1:
        toggle_desktop_icons(sys.argv[1])
    else:
        print("No action specified. Use 'hide' or 'show'.")

