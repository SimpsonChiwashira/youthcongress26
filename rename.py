import os

def rename_images():
    # Looks for a folder named 'images' in the exact same directory as this script
    folder_path = 'images'
    
    if not os.path.exists(folder_path):
        print(f"Error: The folder '{folder_path}' does not exist.")
        return

    # Find all files ending with .jpg or .jpeg
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg'))]
    
    if not files:
        print("No JPG images found in the 'images' folder.")
        return

    print(f"Found {len(files)} images. Starting rename...")

    # Loop through them and rename sequentially
    for index, filename in enumerate(files, start=1):
        old_file_path = os.path.join(folder_path, filename)
        new_file_name = f"{index}.jpg"
        new_file_path = os.path.join(folder_path, new_file_name)
        
        os.rename(old_file_path, new_file_path)

    print(f"Success! Total images renamed: {len(files)}")
    print(f"Update your HTML code with this exact number: const totalImages = {len(files)};")

if __name__ == '__main__':
    rename_images()
import os

def rename_images():
    # Looks for a folder named 'images' in the exact same directory as this script
    folder_path = 'images'
    
    if not os.path.exists(folder_path):
        print(f"Error: The folder '{folder_path}' does not exist.")
        return

    # Find all files ending with .jpg or .jpeg
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg'))]
    
    if not files:
        print("No JPG images found in the 'images' folder.")
        return

    print(f"Found {len(files)} images. Starting rename...")

    # Loop through them and rename sequentially
    for index, filename in enumerate(files, start=1):
        old_file_path = os.path.join(folder_path, filename)
        new_file_name = f"{index}.jpg"
        new_file_path = os.path.join(folder_path, new_file_name)
        
        os.rename(old_file_path, new_file_path)

    print(f"Success! Total images renamed: {len(files)}")
    print(f"Update your HTML code with this exact number: const totalImages = {len(files)};")

if __name__ == '__main__':
    rename_images()
