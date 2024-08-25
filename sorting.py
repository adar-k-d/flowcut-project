'''
import os
import shutil
file_pointers={}
directory="data"
os.mkdir(directory)

def make_file(extn):
    extn_file=extn+".txt"
    file_path = os.path.join(directory, extn_file)
    file_pointer=open(file_path,"w")
    file_pointers[extn]=file_pointer

def close_files():
    for current_pointer in file_pointers.values():
        current_pointer.close()

def organize_desktop():
    desktop_path = os.path.join(os.path.expanduser('~'), 'Desktop')  # Path to your desktop

    # List all files on the desktop
    for item in os.listdir(desktop_path):
        file_type = item.split(".")[-1]
        item_path = os.path.join(desktop_path, item)
        if (file_type) not in file_pointers:
            make_file(file_type)
        
        current_pointer=file_pointers[file_type]
        current_pointer.write(item_path+"\n")
    close_files()

if __name__ == "__main__":
    organize_desktop()
'''
import os
import json

file_paths = {}  # Dictionary to hold file paths based on extensions
desktop_path = os.path.join(os.path.expanduser('~'), 'Desktop')  # Path to your desktop

directory="data"
if not os.path.exists(directory) or not os.path.isdir(directory):
    os.mkdir(directory)
    
def organize_desktop():
    global file_paths
    global desktop_path

    # List all files on the desktop
    for item in os.listdir(desktop_path):
        if os.path.isfile(os.path.join(desktop_path, item)):  # Check if item is a file
            extn = item.split(".")[-1]  # Get file extension
            item_path = os.path.join(desktop_path, item)
            
            # Add file path to dictionary based on extension
            if extn not in file_paths:
                file_paths[extn] = []
            file_paths[extn].append(item_path)

    # Write file paths dictionary to a JSON file
    json_file_path = "data/desktop_files.json"
    with open(json_file_path, "w") as json_file:
        json.dump(file_paths, json_file, indent=4)

if __name__ == "__main__":
    organize_desktop()
