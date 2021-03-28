import getpass
import json

normal = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
key = ['B', '8', '1', '0', '6', '9', '4', '3', '5', 'C', 'E', '2', 'A', '7', 'F', 'D']
account_file_name = 'js/accounts.json'


def get_key_char(c):
    for i in range(len(key)):
        if normal[i] == c:
            return key[i]


def obfuscate_str(s):
    os = ''
    for character in s:
        h = character.encode('utf-8').hex()
        os += get_key_char(h[0])
        os += get_key_char(h[1])
    return os


name = input('Please enter your username: ')
email = input('Please enter your email: ')
password = getpass.getpass('Please enter your password: ')

print('Obfuscating...')

email = obfuscate_str(email)
password = obfuscate_str(password)

user_dict = {
    "name": name,
    "username": email,
    "password": password
}

print('Writing to file...')

with open(account_file_name, 'r') as file:
    read_file = json.load(file)
    accounts = read_file["accounts"]
    accounts.append(user_dict)

with open(account_file_name, 'w') as json_file:
    json.dump(read_file, json_file, indent=4)
