import unittest
from selenium import webdriver
import time
chromeDriver = webdriver.Chrome('C:\\Users\\Jake\\Downloads\\chromedriver_win32\\chromedriver')
chromeDriver.get("localhost:4001")
#UnitTest
def characterLinkTest():
    my_list = ["Mario", "Kirby", "Luigi", "Jigglypuff", "Zelda", "Falco", "Zero Suit Samus", "Donkey Kong", "Fox",
     "Ness", "Peach", "Dr. Mario", "Marth", "Wario",
     "Link", "Pikachu", "Captain Falcon", "Daisy", "Pichu", "Lucina", "Snake"]
    time.sleep(6)
    url = chromeDriver.current_url
    for character in my_list:
        time.sleep(3)
        link = chromeDriver.find_element_by_link_text(character)
        print(link)
        link.click()
        time.sleep(10)
        url = chromeDriver.current_url
        if not url in "localhost:4001/" + character:
            print("Fail") 
        chromeDriver.back()
def main():
    characterLinkTest()
    time.sleep(8)
    chromeDriver.quit()
main()