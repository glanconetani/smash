# import unittest
# from selenium import webdriver
# import time

# chromeDriver = webdriver.Chrome('C:\\Users\\Jake\\Downloads\\chromedriver_win32\\chromedriver')
# chromeDriver.get("localhost:4001")
# #UnitTest

# # test for phase 2 
# def characterLinkTest():
#     my_list = ["Mario", "Kirby", "Luigi", "Jigglypuff", "Zelda", "Falco", "Zero_Suit_Samus", "Donkey_Kong", "Fox",
#      "Ness", "Peach", "Dr._Mario", "Marth", "Wario",
#      "Link", "Pikachu", "Captain_Falcon", "Daisy", "Pichu", "Lucina", "Snake"]

#     time.sleep(1)
#     url = chromeDriver.current_url
#     for character in my_list:
#         time.sleep(1)
#         link = chromeDriver.find_element_by_link_text(character)
#         print(link)
#         link.click()
#         time.sleep(1)
#         url = str(chromeDriver.current_url)
#         if not character in url:
#             assert False
#         chromeDriver.back()


# # tests for phase 3
# def main():
#     characterLinkTest()
#     time.sleep(2)
#     chromeDriver.quit()
# main()